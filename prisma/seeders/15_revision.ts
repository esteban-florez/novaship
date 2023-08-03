import prisma from '../client'
import { seederQueries } from '../seed'
import numbers from '@/lib/utils/number'
import data from '@/prisma/data/revisions.json'
import collect from '@/lib/utils/collection'

const revisions = data

export default async function revision() {
  const tasksCount = await prisma.task.count()

  for (let i = 1; i <= seederQueries.revisions; i++) {
    const skip = numbers(1, tasksCount - 1).randomBetween()
    const selectedTask = await prisma.task.findFirst({ skip })

    await prisma.revision.create({
      data: {
        task: {
          connect: {
            id: selectedTask?.id,
          },
        },
        description: collect(revisions).random().first(),
      },
    })
  }
}
