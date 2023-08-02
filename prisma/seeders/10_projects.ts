import prisma from '../client'
import data from '@/prisma/seeds-data.json'
import { getRandomValueFromType } from '@/lib/utils/types'
import { Visibility } from '@prisma/client'
import { seederQueries } from '../seed'
import { random } from '@/lib/utils/number'

const projects = data.projects

export default async function project() {
  const fieldsCount = await prisma.field.count()
  const personsCount = await prisma.person.count()

  for (let i = 1; i <= seederQueries.projects; i++) {
    const skipFields = random(1, fieldsCount - 1)
    const skipPersons = random(1, personsCount - 1)
    const selectedPerson = await prisma.person.findFirst({ skip: skipPersons })
    const selectedField = await prisma.field.findFirst({ skip: skipFields })

    await prisma.project.create({
      data: {
        title: projects.titles[i - 1],
        description: projects.descriptions[i - 1],
        visibility: getRandomValueFromType(Visibility),
        person: {
          connect: {
            id: selectedPerson?.id,
          },
        },
        fields: {
          connect: {
            id: selectedField?.id,
          },
        },
      },
    })
  }
}
