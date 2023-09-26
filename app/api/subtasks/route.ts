import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/subtask'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import prisma from '@/prisma/client'
import { object, string } from 'zod'
import messages from '@/lib/validation/messages'
import { auth } from '@/lib/auth/api'
import { redirect } from 'next/navigation'

// TODO -> alert pending
export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const activeUser = await auth.user(request)

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
      },
      include: {
        project: {
          include: {
            team: {
              include: {
                memberships: {
                  include: {
                    person: {
                      select: {
                        id: true,
                        name: true,
                      },
                    },
                    company: {
                      select: {
                        id: true,
                        name: true,
                      },
                    },
                  },
                },
              },
            },
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

    if (task === null) {
      redirect(`/home/projects/${appendParsed.projectId}`)
    }

    const projectOwner = task.project.team.memberships.some(member => (member.companyId ?? member.personId) === activeUser.id && member.isLeader)

    const isLeader = task?.participations.find(participation => {
      const memberLeader = (participation.membership.personId ?? participation.membership.companyId) === activeUser.id && participation.isLeader
      return Boolean(memberLeader || projectOwner)
    })

    if (isLeader == null) {
      redirect(`/home/projects/${appendParsed.projectId}`)
    }

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
