import prisma from '../client'
import tasks from '@/prisma/data/tasks.json'
import { TaskStatus } from '@prisma/client'
import collect from '@/lib/utils/collection'
import numbers from '@/lib/utils/number'
import coinflip from '@/lib/utils/coinflip'

export default async function task() {
  const MAX = tasks.titles.length
  const tasksRange = numbers(0, MAX - 1)
  const projects = await prisma.project.findMany({
    include: {
      team: {
        include: {
          memberships: true,
        },
      },
      person: true,
    },
  })

  const tasksData = projects.flatMap(project => {
    const projectTasks = []

    let personId
    if (project.team !== null) {
      const members = collect(project.team.memberships)
      personId = members.random().first().personId
    } else {
      personId = project.personId as string
    }

    for (let i = 0; i < 5; i++) {
      const index = tasksRange.random()
      projectTasks.push({
        title: tasks.titles[index],
        description: tasks.descriptions[index],
        status: coinflip() ? TaskStatus.PENDING : null,
        projectId: project.id,
        personId,
      })
    }
    return projectTasks
  })

  await prisma.task.createMany({ data: tasksData })
}
