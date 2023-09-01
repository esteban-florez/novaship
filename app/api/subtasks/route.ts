import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/subtask'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import prisma from '@/prisma/client'
import { object, string } from 'zod'
import messages from '@/lib/validation/messages'
import { auth } from '@/lib/auth/api'
import { redirect } from 'next/navigation'

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const user = await auth.user(request)

    const validationSchema = object({
      taskId: string(messages.string)
        .cuid(messages.cuid),
      projectId: string(messages.string)
        .cuid(messages.cuid),
    })

    const appendParsed = validationSchema.parse(data)

    const task = await prisma.task.findFirst({
      where: {
        id: appendParsed.taskId,
        deletedAt: null,
      },
      include: {
        project: {
          select: {
            personId: true,
            companyId: true,
          },
        },
        participations: {
          include: {
            membership: {
              include: {
                person: {
                  select: {
                    id: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    const projectOwner = (task?.project.personId ?? task?.project.companyId) === user.id

    const isLeader = task?.participations.find(participation => {
      const participationMatchUser = participation.membership.personId === user.id
      return Boolean((participation.isLeader && participationMatchUser) || projectOwner)
    })

    if (task === null || (isLeader == null)) redirect(`/home/projects/${appendParsed.projectId}`)

    await prisma.subtask.create({
      data: {
        ...parsed,
        taskId: appendParsed.taskId,
      },
    })

    return NextResponse.redirect(url(`/home/projects/${appendParsed.projectId}/tasks/${appendParsed.taskId}`))
  } catch (error) {
    handleError(error, data)
  }
}
