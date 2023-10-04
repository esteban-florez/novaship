import prisma from '../client'
import data from '@/prisma/data/projects.json'
import types from '@/lib/utils/types'
import { Visibility } from '@prisma/client'
import collect from '@/lib/utils/collection'
import coinflip from '@/lib/utils/coinflip'

export default async function project() {
  const MAX = data.titles.length
  const categories = await prisma.category.findMany({ select: { id: true } })
  const teams = collect(await prisma.team.findMany({ select: { id: true } }))
  const persons = collect(await prisma.person.findMany({ select: { id: true } }))

  for (let i = 0; i < MAX; i++) {
    const rnd = coinflip()

    await prisma.project.create({
      data: {
        title: data.titles[i],
        description: data.descriptions[i],
        visibility: types(Visibility).random(),
        teamId: rnd ? teams.random().first().id : null,
        personId: !rnd ? persons.random().first().id : null,
        categories: {
          connect: collect(categories).random(5).all(),
        },
      },
    })
  }
}
