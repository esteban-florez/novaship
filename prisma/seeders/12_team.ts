import data from '@/prisma/data/teams.json'
import prisma from '../client'
import collect from '@/lib/utils/collection'
import coinflip from '@/lib/utils/coinflip'
import numbers from '@/lib/utils/number'

const teams = data

export default async function team() {
  const MAX = teams.names.length
  const categories = await prisma.category.findMany({ select: { id: true } })
  const persons = collect(await prisma.person.findMany({ select: { id: true } }))
  const companies = collect(await prisma.company.findMany({ select: { id: true } }))

  for (let i = 0; i < MAX; i++) {
    const rnd = coinflip()
    const code = `EQ-${numbers(100_000, 999_999).random()}`

    const { id: leaderId } = await prisma.leader.create({
      data: {
        personId: rnd ? persons.random().first().id : null,
        companyId: !rnd ? companies.random().first().id : null,
      },
    })

    await prisma.team.create({
      data: {
        name: teams.names[i],
        description: teams.descriptions[i],
        code,
        categories: {
          connect: collect(categories).random(5).all(),
        },
        leaderId,
      },
    })
  }
}
