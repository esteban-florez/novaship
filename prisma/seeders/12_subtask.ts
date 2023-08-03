import prisma from '../client'
import data from '@/prisma/data/subtasks.json'
import { seederQueries } from '../seed'
import types from '@/lib/utils/types'
import { TaskStatus } from '@prisma/client'
import numbers from '@/lib/utils/number'
import collect from '@/lib/utils/collection'

const tasks = data

export default async function subtask() {
  const tasksCount = await prisma.task.count()

  for (let i = 1; i < seederQueries.tasks; i++) {
    const skip = numbers(1, tasksCount - 1).randomBetween()
    const selectedTask = await prisma.task.findFirst({ skip })

    await prisma.subtask.create({
      data: {
        title: collect(tasks.titles).random().first(),
        description: collect(tasks.descriptions).random().first(),
        status: types(TaskStatus).random(),
        task: {
          connect: {
            id: selectedTask?.id,
          },
        },
      },
    })
  }
}
