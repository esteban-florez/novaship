import prisma from '../client'
import data from '@/prisma/data/revisions.json'
import collect from '@/lib/utils/collection'
import numbers from '@/lib/utils/number'

export default async function revision() {
  const tasks = await prisma.task.findMany({ select: { id: true } })
  const subtasks = await prisma.subtask.findMany({ select: { id: true } })

  const relation = numbers(1, 3).random() === 2
    ? { taskId: collect(tasks).random().first().id }
    : { subtaskId: collect(subtasks).random().first().id }

  for (let i = 0; i < data.length; i++) {
    await prisma.revision.create({
      data: {
        ...relation,
        content: collect(data).random().first(),
      },
    })
  }
}
