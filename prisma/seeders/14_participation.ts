import prisma from '../client'
import { seederQueries } from '../seed'
import numbers from '@/lib/utils/number'

export default async function participation() {
  const membershipsCount = await prisma.membership.count()
  const tasksCount = await prisma.task.count()

  for (let i = 1; i <= seederQueries.participations; i++) {
    const skipMemberships = numbers(1, membershipsCount - 1).randomBetween()
    const skipTasks = numbers(1, tasksCount - 1).randomBetween()
    const selectedMembership = await prisma.membership.findFirst({ skip: skipMemberships })
    const selectedTask = await prisma.task.findFirst({ skip: skipTasks })

    await prisma.participation.create({
      data: {
        isLeader: numbers(1, 3).randomBetween() === 3,
        membership: {
          connect: {
            id: selectedMembership?.id,
          },
        },
        task: {
          connect: {
            id: selectedTask?.id,
          },
        },
      },
    })
  }
}
