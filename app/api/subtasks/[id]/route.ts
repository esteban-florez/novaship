import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/subtask'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/api'
import { notFound } from 'next/navigation'
import { deleteSubtask, getMySubtask } from '@/lib/data-fetching/subtask'

// TODO -> alert pending
export async function PUT(request: NextRequest, { params: { id } }: PageContext) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const { id: userId } = await auth.user(request)

    const subtask = await getMySubtask({ id, userId })
    if (subtask == null) {
      notFound()
    }

    await prisma.subtask.update({
      where: {
        id: subtask.id,
      },
      data: {
        ...parsed,
      },
    })

    return NextResponse.redirect(url(`/home/projects/${subtask.task.projectId}/tasks/${subtask.taskId}?alert=subtask_updated`))
  } catch (error) {
    handleError(error, data)
  }
}

export async function DELETE(request: NextRequest, { params: { id } }: PageContext) {
  try {
    const { id: userId } = await auth.user(request)
    const subtask = await getMySubtask({ id, userId })
    const deletedSubtask = await deleteSubtask({ id, userId })

    if (subtask == null) {
      notFound()
    }

    if (deletedSubtask.count === 0) {
      notFound()
    }

    return NextResponse.redirect(url(`/home/projects/${subtask?.task.projectId}/?alert=subtask_deleted`))
  } catch (error) {
    return handleError(error)
  }
}
