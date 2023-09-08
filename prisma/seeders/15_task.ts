import prisma from '../client'
import tasks from '@/prisma/data/tasks.json'
import types from '@/lib/utils/types'
import { TaskStatus } from '@prisma/client'
import collect from '@/lib/utils/collection'
import numbers from '@/lib/utils/number'

export default async function task() {
  const MAX = tasks.titles.length
  const projects = await prisma.project.findMany({ select: { id: true } })

  for (let i = 0; i < MAX; i++) {
    const position = numbers(MAX - 1).random()

    await prisma.task.create({
      data: {
        title: tasks.titles[position],
        description: tasks.descriptions[position],
        status: types(TaskStatus).random(),
        projectId: collect(projects).random().first().id,
      },
    })
  }
}
