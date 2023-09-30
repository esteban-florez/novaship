import prisma from '../client'
import subtasks from '@/prisma/data/subtasks.json'
import types from '@/lib/utils/types'
import { TaskStatus } from '@prisma/client'
import collect from '@/lib/utils/collection'
import numbers from '@/lib/utils/number'

export default async function subtask() {
  const MAX = subtasks.titles.length
  const tasks = collect(await prisma.task.findMany({
    where: { status: null },
    select: { id: true },
  }))

  for (let i = 1; i < MAX; i++) {
    const position = numbers(MAX - 1).random()

    await prisma.subtask.create({
      data: {
        title: subtasks.titles[position],
        description: subtasks.descriptions[position],
        status: types(TaskStatus).random(),
        taskId: tasks.random().first().id,
      },
    })
  }
}
