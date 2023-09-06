import prisma from '../client'
import types from '@/lib/utils/types'
import { State } from '@prisma/client'
import collect from '@/lib/utils/collection'
import numbers from '@/lib/utils/number'
import contracts from '@/prisma/data/contracts.json'

export default async function contract() {
  const MAX = contracts.titles.length
  const persons = await prisma.person.findMany({ select: { id: true } })
  const companies = await prisma.company.findMany({ select: { id: true } })
  const teams = await prisma.team.findMany({ select: { id: true } })
  const random = numbers(1, 3).random() === 2

  const ids = {
    projectId: null,
    teamId: collect(teams).random().first().id,
    personId: !random ? collect(persons).random().first().id : null,
    companyId: random ? collect(companies).random().first().id : null,
  }

  for (let i = 0; i < MAX; i++) {
    const position = numbers(MAX - 1).random()

    await prisma.contract.create({
      data: {
        ...ids,
        title: contracts.titles[position],
        description: contracts.descriptions[position],
        price: numbers(200, 800).random(),
        state: types(State).random(),
      },
    })
  }
}
