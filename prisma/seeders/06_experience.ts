import prisma from '../client'
import data from '@/prisma/data/experiences.json'
import { seederQueries } from '../seed'
import numbers from '@/lib/utils/number'
import collect from '@/lib/utils/collection'

const experiences = data

export default async function experience() {
  const personsData = await prisma.person.findMany({ select: { id: true } })
  const persons = collect(personsData)

  for (let i = 1; i <= seederQueries.experiences; i++) {
    const toDate = new Date()
    toDate.setDate(toDate.getDate() + numbers(25, 410).randomBetween())
    // TODO -> sospecho que este algoritmo de fechas está mal, pero no se. Se supone que ambas fechas deben estar en el pasado xd.

    await prisma.experience.create({
      data: {
        name: collect(experiences.names).random().first(),
        description: collect(experiences.descriptions).random().first(),
        role: collect(experiences.roles).random().first(),
        from: new Date(),
        to: toDate,
        personId: persons.random().first().id,
      },
    })
  }
}
