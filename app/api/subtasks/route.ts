import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/subtask'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import prisma from '@/prisma/client'
import { object, string } from 'zod'
import messages from '@/lib/validation/messages'
import { auth } from '@/lib/auth/api'
import { notFound } from 'next/navigation'
import { getMyTask } from '@/lib/data-fetching/task'

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const { id: userId } = await auth.user(request)

    const validationSchema = object({
      taskId: string(messages.string)
        .cuid(messages.cuid),
    })

    const appendParsed = validationSchema.parse(data)

    const task = await getMyTask({ id: appendParsed.taskId, userId })
    if (task === null) {
      notFound()
    }

    await prisma.subtask.create({
      data: {
        ...parsed,
        taskId: appendParsed.taskId,
        status: 'PENDING'
      },
    })

    return NextResponse.redirect(url(`/home/projects/${task.projectId}/tasks/${task.id}?alert=subtask_created`))
  } catch (error) {
    handleError(error, data)
  }
}
