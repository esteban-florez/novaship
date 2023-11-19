import { getCompletedHours } from '@/lib/utils/tables'
import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { getPersonRelatedIds } from '../user'

export async function getInternshipHours(userId: string) {
  const internships = await prisma.internship.findMany({
    where: {
      personId: userId,
      status: {
        not: 'REJECTED',
      },
    },
    select: {
      hours: true,
      recruitments: {
        select: {
          status: true,
          progresses: {
            select: {
              hours: true,
            },
          },
        },
      },
      updatedAt: true,
    },
  })

  const hoursRequired: number[] = Array(12).fill(0)
  const hoursCompleted: number[] = Array(12).fill(0)
  const months = Array.from(Array(12).keys())

  internships.forEach((internship) => {
    const month = months[internship.updatedAt.getMonth()]
    hoursRequired[month] == null
      ? (hoursRequired[month] = internship.hours ?? 0)
      : (hoursRequired[month] += internship.hours ?? 0)
    hoursCompleted[month] == null
      ? (hoursCompleted[month] = getCompletedHours(internship) ?? 0)
      : (hoursCompleted[month] += getCompletedHours(internship) ?? 0)
  })

  return [hoursRequired, hoursCompleted]
}

export async function getOffers(userId: string) {
  const { skills, jobs, categories } = await getPersonRelatedIds({
    id: userId,
  })

  const baseQuery: Prisma.OfferWhereInput = {
    limit: { gt: 0 },
    expiresAt: {
      gt: new Date(),
    },
  }
  const offerQuery: Prisma.OfferWhereInput = {
    OR: [
      {
        categories: {
          some: {
            id: { in: categories },
          },
        },
      },
      {
        jobId: {
          in: jobs,
        },
      },
      {
        skills: {
          some: {
            id: { in: skills },
          },
        },
      },
    ],
  }

  const applicableOffers = await prisma.offer.count({
    where: { ...baseQuery, ...offerQuery },
  })
  const nonApplicableOffers = await prisma.offer.count({
    where: { ...baseQuery, NOT: { ...offerQuery } },
  })

  return [applicableOffers, nonApplicableOffers]
}

export async function getProjectsStatuses(userId: string) {
  const tasks = await prisma.task.groupBy({
    by: ['status'],
    _count: {
      status: true,
    },
    where: {
      OR: [
        { personId: userId },
        {
          participations: {
            some: { personId: userId },
          },
        },
        {
          subtasks: {
            some: {
              subparticipations: {
                some: { personId: userId },
              },
            },
          },
        },
      ],
    },
  })

  const { tasksPending, tasksProgress, tasksRevision, tasksDone } =
    tasks.reduce(
      (acc, task) => {
        const status = task.status
        if (status === 'PENDING') acc.tasksPending += task._count.status
        if (status === 'PROGRESS') acc.tasksProgress += task._count.status
        if (status === 'REVIEW') acc.tasksRevision += task._count.status
        if (status === 'DONE') acc.tasksDone += task._count.status
        return acc
      },
      {
        tasksPending: 0,
        tasksProgress: 0,
        tasksRevision: 0,
        tasksDone: 0,
      }
    )

  return [tasksPending, tasksProgress, tasksRevision, tasksDone]
}
