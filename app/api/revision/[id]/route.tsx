import { schema } from '@/lib/validation/schemas/revision'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import { object, string } from 'zod'
import messages from '@/lib/validation/messages'

export async function PUT(request: NextRequest, { params: { id } }: PageContext) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)

    const revision = await prisma.revision.findFirst({
      where: { id },
      select: {
        task: {
          select: {
            id: true,
            projectId: true
          }
        }
      }
    })

    if (revision == null) {
      notFound()
    }

    await prisma.revision.update({
      data: {
        ...parsed
      },
      where: { id }
    })

    if (parsed.taskId != null) {
      return NextResponse.redirect(url(`/home/projects/${revision.task?.projectId}/tasks/${revision.task?.id}?alert=task_revision_updated`))
    }

    if (parsed.subtaskId != null) {
      return NextResponse.redirect(url(`/home/projects/${revision.task?.projectId}/tasks/${revision.task?.id}?alert=subtask_revision_updated`))
    }

    return NextResponse.redirect(url('/home/projects'))
  } catch (error) {
    return handleError(error, data)
  }
}

export async function DELETE(request: NextRequest, { params: { id } }: PageContext) {
  try {
    const revision = await prisma.revision.findFirst({
      where: {
        id,
      },
      select: {
        taskId: true,
        subtaskId: true,
        task: {
          select: {
            id: true,
            projectId: true
          }
        }
      }
    })

    if (revision == null) {
      notFound()
    }

    await prisma.revision.delete({
      where: { id }
    })

    if (revision.taskId != null) {
      return NextResponse.redirect(url(`/home/projects/${revision.task?.projectId}/tasks/${revision.taskId}?alert=task_revision_deleted`))
    }

    if (revision.subtaskId != null) {
      return NextResponse.redirect(url(`/home/projects/${revision.task?.projectId}/tasks/${revision.task?.id}?alert=subtask_revision_deleted`))
    }

    return NextResponse.redirect(url('/home/projects'))
  } catch (error) {
    return handleError(error)
  }
}
