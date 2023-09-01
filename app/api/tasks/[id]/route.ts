import { schema } from '@/lib/validation/schemas/task'
import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import { url } from '@/lib/utils/url'
import { redirect } from 'next/navigation'

export async function PUT(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const user = await auth.person(request)

    const task = await prisma.task.findFirst({
      where: {
        id: data.taskId,
        deletedAt: null,
      },
      include: {
        project: {
          select: {
            personId: true,
          },
        },
      },
    })

    if (task?.deletedAt !== null || task.project.personId !== user.id) {
      redirect('/home/projects')
    }

    await prisma.task.update({
      where: {
        id: data.taskId,
      },
      data: {
        title: parsed.title,
        description: parsed.description,
        participations: {
          deleteMany: {
            id: {
              notIn: parsed.members,
            },
          },
          createMany: {
            data: parsed.members.map(member => {
              return {
                membershipId: member,
                isLeader: member === parsed.responsable,
              }
            }),
            skipDuplicates: true,
          },
        },
      },
    })

    return NextResponse.redirect(url(`/home/projects/${task.projectId}`))
  } catch (error) {
    return handleError(error, data)
  }
}

interface Context {
  params: {
    id: string
  }
}

export async function DELETE(request: NextRequest, { params: { id } }: Context) {
  try {
    const user = await auth.user(request)

    const task = await prisma.task.findFirst({
      where: {
        id,
      },
      include: {
        project: {
          include: {
            person: {
              select: {
                id: true,
              },
            },
          },
        },
      },
    })

    if ((task?.project.personId ?? task?.project.companyId) !== user.id) redirect('/home/projects')

    const deletedTask = await prisma.task.delete({
      where: { id },
    })

    return NextResponse.json(deletedTask)
  } catch (error) {
    return handleError(error)
  }
}
