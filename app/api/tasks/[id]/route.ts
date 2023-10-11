import { schema } from '@/lib/validation/schemas/task'
import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import { deleteTask, getMyTask } from '@/lib/data-fetching/task'
import collect from '@/lib/utils/collection'

export async function PUT(request: NextRequest, { params: { id } }: PageContext) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const { id: userId } = await auth.user(request)

    const task = await getMyTask({ id, userId })
    if (task == null) {
      notFound()
    }

    const { members, projectId, responsable, ...rest } = parsed

    if (members != null) {
      const taskParticipations = task.participations.map(participation => participation.personId)
      const newParticipations = collect(members).deleteDuplicatesFrom(taskParticipations)

      await prisma.task.update({
        where: { id },
        data: {
          ...rest,
          personId: responsable,
          participations: {
            deleteMany: {
              // id: { notIn: members }
              personId: { notIn: members },
            },
            createMany: {
              data: newParticipations.map(participation => {
                return {
                  personId: participation,
                }
              }),
            },
          },
        },
      })
    } else {
      await prisma.task.update({
        where: { id },
        data: {
          ...rest,
        },
      })
    }

    return NextResponse.redirect(url(`/home/projects/${task.projectId}?alert=task_updated`))
  } catch (error) {
    return handleError(error, data)
  }
}

export async function DELETE(request: NextRequest, { params: { id } }: PageContext) {
  try {
    const { id: userId } = await auth.user(request)

    const task = await getMyTask({ id, userId })
    if (task == null) {
      notFound()
    }

    await deleteTask({ id, userId })

    return NextResponse.redirect(url(`/home/projects/${task.projectId}?alert=task_deleted`))
  } catch (error) {
    return handleError(error)
  }
}
