import { schema } from '@/lib/validation/schemas/revision'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import { auth } from '@/lib/auth/api'
import logEvent from '@/lib/data-fetching/log'

export async function PUT(
  request: NextRequest,
  { params: { id } }: PageContext
) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const { authUserId } = await auth.user(request)
    if (authUserId == null) {
      notFound()
    }

    const revision = await prisma.revision.findFirst({
      where: { id },
      select: {
        subtask: {
          select: {
            id: true,
            task: {
              select: {
                id: true,
                projectId: true,
              },
            },
          },
        },
        task: {
          select: {
            id: true,
            projectId: true,
          },
        },
      },
    })

    if (revision == null) {
      notFound()
    }

    await prisma.revision.update({
      data: {
        ...parsed,
      },
      where: { id },
    })

    await logEvent({
      title: 'Revisión',
      description: `La revisión "${parsed.content}" ha sido actualizada`,
      status: 'Success',
      authUserId,
    })

    if (revision.task != null) {
      return NextResponse.redirect(
        url(
          `/home/projects/${revision.task?.projectId}/tasks?id=${revision.task.id}&filtered=${parsed.filter as string}&alert=task_revision_updated`
        )
      )
    }

    if (revision.subtask != null) {
      return NextResponse.redirect(
        url(
          `/home/projects/${revision.subtask.task?.projectId}/tasks?id=${revision.subtask.task.id}&subtaskId=${revision.subtask.id}&filtered=${parsed.filter as string}&alert=subtask_revision_updated`
        )
      )
    }

    return NextResponse.redirect(url('/home/projects'))
  } catch (error) {
    return handleError(error, data)
  }
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: PageContext
) {
  try {
    const { authUserId } = await auth.user(request)
    if (authUserId == null) {
      notFound()
    }

    const revision = await prisma.revision.findFirst({
      where: {
        id,
      },
      select: {
        content: true,
        subtask: {
          select: {
            id: true,
            task: {
              select: {
                id: true,
                projectId: true,
              },
            },
          },
        },
        task: {
          select: {
            id: true,
            projectId: true,
          },
        },
      },
    })

    if (revision == null) {
      notFound()
    }

    await prisma.revision.delete({
      where: { id },
    })

    await logEvent({
      title: 'Revisión',
      description: `La revisión "${revision.content}" ha sido eliminada`,
      status: 'Warning',
      authUserId,
    })

    const projectId = revision.task?.projectId ?? revision?.subtask?.task?.projectId as string
    const taskId = revision.task?.id ?? revision?.subtask?.task?.id as string

    if (revision.task != null) {
      return NextResponse.redirect(
        url(
          `/home/projects/${projectId}/tasks?id=${taskId}&alert=task_revision_deleted`
        )
      )
    }

    if (revision.subtask != null) {
      return NextResponse.redirect(
        url(
          `/home/projects/${projectId}/tasks?id=${taskId}&subtaskId=${revision.subtask.id}&alert=subtask_revision_deleted`
        )
      )
    }

    return NextResponse.redirect(url('/home/projects'))
  } catch (error) {
    return handleError(error)
  }
}
