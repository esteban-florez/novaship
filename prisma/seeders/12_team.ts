import data from '@/prisma/data/teams.json'
import prisma from '../client'
import collect from '@/lib/utils/collection'

const teams = data

export default async function team() {
  const MAX = teams.names.length
  const categories = await prisma.category.findMany({ select: { id: true } })

  for (let i = 0; i < MAX; i++) {
    await prisma.team.create({
      data: {
        name: teams.names[i],
        description: teams.descriptions[i],
        categories: {
          connect: collect(categories).random(5).all(),
        },
      },
    })
  }
}
