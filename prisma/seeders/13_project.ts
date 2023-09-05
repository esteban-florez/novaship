import prisma from '../client'
import data from '@/prisma/data/projects.json'
import types from '@/lib/utils/types'
import { Visibility } from '@prisma/client'
import collect from '@/lib/utils/collection'

export default async function project() {
  const MAX = data.titles.length
  const categories = await prisma.category.findMany({ select: { id: true } })
  const teams = await prisma.team.findMany({ select: { id: true } })

  for (let i = 0; i < MAX; i++) {
    await prisma.project.create({
      data: {
        title: data.titles[i],
        description: data.descriptions[i],
        visibility: types(Visibility).random(),
        team: {
          connect: collect(teams).random().first(),
        },
        categories: {
          connect: collect(categories).random(5).all(),
        },
      },
    })
  }
}
