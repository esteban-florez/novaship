import { handleError } from '@/lib/errors/api'
import { auth } from '@/lib/auth/api'
import { schema } from '@/lib/validation/schemas/revision'
import prisma from '@/prisma/client'
import { type NextRequest, NextResponse } from 'next/server'
import { url } from '@/lib/utils/url'
import { getMyTask } from '@/lib/data-fetching/task'
import { notFound } from 'next/navigation'
import { getMySubtask } from '@/lib/data-fetching/subtask'
import logEvent from '@/lib/data-fetching/log'
import { logs } from '@/lib/log'

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const { id, authUserId } = await auth.user(request)

    const { filter, content, subtaskId, taskId } = parsed

    if (taskId != null) {
      const task = await getMyTask({ id: taskId, userId: id })
      if (task == null) {
        notFound()
      }

      await prisma.revision.create({
        data: {
          content,
          taskId,
        },
      })

      const { revision_create: { message, model, status } } = logs
      await logEvent({
        action: message,
        model,
        status,
        authUserId,
      })

      return NextResponse.redirect(
        url(
          `home/projects/${task.projectId}/tasks?id=${taskId}&filtered=${filter as string}&alert=task_revision_created`
        )
      )
    }

    if (subtaskId != null) {
      const subtask = await getMySubtask({ id: subtaskId, userId: id })
      if (subtask == null) {
        notFound()
      }

      await prisma.revision.create({
        data: {
          content,
          subtaskId,
        },
      })

      const { revision_create: { message, model, status } } = logs
      await logEvent({
        action: message,
        model,
        status,
        authUserId,
      })

      return NextResponse.redirect(
        url(
          `home/projects/${subtask.task.projectId}/tasks?id=${subtask.task.id}&subtaskId=${subtask.id}&filtered=${filter as string}&alert=subtask_revision_created`
        )
      )
    }

    return NextResponse.redirect(url('/home/projects'))
  } catch (error) {
    return handleError(error, data)
  }
}
