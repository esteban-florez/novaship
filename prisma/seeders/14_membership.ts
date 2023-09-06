import collect from '@/lib/utils/collection'
import prisma from '../client'
import { seederQueries } from '../seed'
import numbers from '@/lib/utils/number'

export default async function membership() {
  const teams = await prisma.team.findMany({ select: { id: true } })
  const persons = await prisma.person.findMany({ select: { id: true } })
  const companies = await prisma.company.findMany({ select: { id: true } })

  const getRandom = () => {
    return numbers(1, 5).random() === 2
  }

  for (let i = 1; i <= seederQueries.memberships; i++) {
    const random = getRandom()

    const leader = random
      ? {
          isLeader: true,
          company: {
            connect: collect(companies).random().first(),
          },
        }
      : {
          isLeader: random,
          person: {
            connect: collect(persons).random().first(),
          },
        }

    await prisma.membership.create({
      data: {
        ...leader,
        team: {
          connect: collect(teams).random().first(),
        },
      },
    })
  }
}
