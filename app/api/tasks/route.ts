import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/task'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import { auth } from '@/lib/auth/api'
import { notFound } from 'next/navigation'
import { getMyProject } from '@/lib/data-fetching/project'
import prisma from '@/prisma/client'

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
      await prisma.task.create({
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

      return NextResponse.redirect(url(`/home/projects/${parsed.projectId}/tasks?alert=task_created`))
    }

    await prisma.task.create({
      data: {
        ...rest,
        projectId: parsed.projectId,
        personId: userId,
        status: 'PENDING',
      },
    })

    return NextResponse.redirect(url(`/home/projects/${parsed.projectId}/tasks?alert=task_created`))
  } catch (error) {
    handleError(error, data)
  }
}
