import collect from '@/lib/utils/collection'
import prisma from '@/prisma/client'

export async function getExpiringOffers(userId: string) {
  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)

  return await prisma.offer.findMany({
    where: {
      companyId: userId,
      expiresAt: {
        gte: weekAgo,
        lte: new Date(),
      },
    },
    select: {
      id: true,
      title: true,
      hiring: true,
      expiresAt: true,
    },
    take: 5,
  })
}

export async function getHirings(userId: string) {
  const hirings = await prisma.hiring.groupBy({
    by: ['updatedAt'],
    where: {
      offer: {
        companyId: userId,
      },
    },
  })

  const hiringUsers: number[] = Array(12).fill(0)
  const months = Array.from(Array(12).keys())

  hirings.forEach((hiring) => {
    const month = months[hiring.updatedAt.getMonth()]
    hiringUsers[month] == null
      ? (hiringUsers[month] = 0)
      : (hiringUsers[month] += 1)
  })

  return hiringUsers
}

export async function getUsersCompatibles(userId: string) {
  const offers = await prisma.offer.findMany({
    where: {
      companyId: userId,
      expiresAt: {
        gte: new Date(),
      },
    },
    select: {
      categories: {
        select: {
          id: true,
        },
      },
      skills: {
        select: {
          id: true,
        },
      },
      job: {
        select: {
          id: true,
        },
      },
    },
  })

  const categories: string[] = []
  const skills: string[] = []
  const jobs: string[] = []
  offers.forEach((offer) => {
    collect(offer.categories)
      .ids()
      .map((category) => categories.push(category))
    collect(offer.skills)
      .ids()
      .map((skill) => skills.push(skill))
    jobs.push(offer.job.id)
  })

  const totalUsers = await prisma.person.count()
  const users = await prisma.person.count({
    where: {
      OR: [
        {
          categories: {
            some: {
              id: {
                in: categories,
              },
            },
          },
        },
        {
          skills: {
            some: {
              id: {
                in: skills,
              },
            },
          },
        },
        {
          jobs: {
            some: {
              id: {
                in: jobs,
              },
            },
          },
        },
      ],
    },
  })

  return { totalUsers, users }
}
