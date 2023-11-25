import prisma from '../client'
import data from '@/prisma/data/projects.json'
import types from '@/lib/utils/types'
import { Visibility } from '@prisma/client'
import collect from '@/lib/utils/collection'
import coinflip from '@/lib/utils/coinflip'
import { randomCode } from '@/lib/utils/code'

export default async function project() {
  const MAX = data.titles.length
  const categories = await prisma.category.findMany({ select: { id: true } })
  const teams = collect(await prisma.team.findMany({ select: { id: true } }))
  const persons = collect(await prisma.person.findMany({ select: { id: true } }))
  const images = collect(['1.jpeg', '2.jpg', '3.jpg'])

  for (let i = 0; i < MAX; i++) {
    const rnd = coinflip()
    const code = randomCode('project')

    await prisma.project.create({
      data: {
        title: data.titles[i],
        description: data.descriptions[i],
        visibility: types(Visibility).random(),
        teamId: rnd ? teams.random().first().id : null,
        personId: !rnd ? persons.random().first().id : null,
        code,
        image: '/project' + images.random().first(),
        categories: {
          connect: collect(categories).random(5).all(),
        },
      },
    })
  }
}
