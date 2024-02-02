import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/task'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import { auth } from '@/lib/auth/api'
import { notFound } from 'next/navigation'
import { getMyProject } from '@/lib/data-fetching/project'
import prisma from '@/prisma/client'
import logEvent from '@/lib/data-fetching/log'

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const { id: userId } = await auth.user(request)

    if (parsed.projectId == null) {
      notFound()
    }

    const project = await getMyProject({ id: parsed.projectId, userId })
    if (project == null) {
      notFound()
    }

    const { responsable, members, ...rest } = parsed

    if (members != null && responsable != null) {
      const task = await prisma.task.create({
        data: {
          ...rest,
          participations: {
            create: members?.map(member => {
              return {
                personId: member,
              }
            }),
          },
          projectId: parsed.projectId,
          personId: responsable,
          status: 'PENDING',
        },
      })

      await logEvent({
        title: 'Tarea',
        description: `La tarea "${parsed.title}" ha sido registrada`,
        status: 'Success',
        authUserId: userId,
      })

      return NextResponse.redirect(url(`/home/projects/${parsed.projectId}/tasks?id=${task.id}&alert=task_created`))
    }

    const task = await prisma.task.create({
      data: {
        ...rest,
        projectId: parsed.projectId,
        personId: userId,
        status: 'PENDING',
      },
    })

    await logEvent({
      title: 'Tarea',
      description: `La tarea "${parsed.title}" ha sido registrada`,
      status: 'Success',
      authUserId: userId,
    })

    return NextResponse.redirect(url(`/home/projects/${parsed.projectId}/tasks?id=${task.id}&alert=task_created`))
  } catch (error) {
    const { authUserId } = await auth.user(request)
    await logEvent({
      title: 'Tarea',
      description: 'La tarea no pudo ser registrada',
      status: 'Error',
      authUserId,
    })
    handleError(error, data)
  }
}
