import collect from '@/lib/utils/collection'
import prisma from '../client'
import { seederQueries } from '../seed'
import numbers from '@/lib/utils/number'

export default async function participation() {
  const projects = await prisma.project.findMany({
    include: {
      tasks: true,
      team: {
        include: { memberships: true },
      },
    },
  })

  const memberships = collect(projects).random().first().team.memberships
  const tasks = collect(projects).random().first().tasks

  for (let i = 0; i < seederQueries.participations; i++) {
    await prisma.participation.create({
      data: {
        isLeader: numbers(1, 3).random() === 3,
        membershipId: collect(memberships).random().first().id,
        taskId: collect(tasks).random().first().id ?? null,
      },
    })
  }
}
