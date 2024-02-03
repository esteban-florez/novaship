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

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const { id } = await auth.user(request)

    if (parsed.taskId != null) {
      const task = await getMyTask({ id: parsed.taskId, userId: id })
      if (task == null) {
        notFound()
      }

      await prisma.revision.create({
        data: {
          ...parsed,
          taskId: task?.id,
        },
      })

      await logEvent({
        title: 'Revisión',
        description: `La revisión "${parsed.content}" ha sido registrada`,
        status: 'Success',
        authUserId: id,
      })

      return NextResponse.redirect(
        url(
          `home/projects/${task.projectId}/tasks?id=${task.id}&filtered=${parsed.filter as string}&alert=task_revision_created`
        )
      )
    }

    if (parsed.subtaskId != null) {
      const subtask = await getMySubtask({ id: parsed.subtaskId, userId: id })
      if (subtask == null) {
        notFound()
      }

      await prisma.revision.create({
        data: {
          ...parsed,
          subtaskId: subtask?.id,
        },
      })

      await logEvent({
        title: 'Revisión',
        description: `La revisión "${parsed.content}" ha sido registrada`,
        status: 'Success',
        authUserId: id,
      })

      return NextResponse.redirect(
        url(
          `home/projects/${subtask.task.projectId}/tasks?id=${subtask.task.id}&subtaskId=${subtask.id}&filtered=${parsed.filter as string}&alert=subtask_revision_created`
        )
      )
    }

    return NextResponse.redirect(url('home/projects'))
  } catch (error) {
    return handleError(error, data)
  }
}
