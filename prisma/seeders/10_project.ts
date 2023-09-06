import prisma from '../client'
import data from '@/prisma/data/projects.json'
import types from '@/lib/utils/types'
import { Visibility } from '@prisma/client'
import { seederQueries } from '../seed'
import numbers from '@/lib/utils/number'

const projects = data

export default async function project() {
  const categoriesCount = await prisma.category.count()
  const personsCount = await prisma.person.count()

  for (let i = 1; i <= seederQueries.projects; i++) {
    const skipCategories = numbers(1, categoriesCount - 1).randomBetween()
    const skipPersons = numbers(1, personsCount - 1).randomBetween()
    const selectedPerson = await prisma.person.findFirst({ skip: skipPersons })
    const selectedCategory = await prisma.category.findFirst({ skip: skipCategories })

    await prisma.project.create({
      data: {
        title: projects.titles[i - 1],
        description: projects.descriptions[i - 1],
        visibility: types(Visibility).random(),
        person: {
          connect: {
            id: selectedPerson?.id,
          },
        },
        categories: {
          connect: {
            id: selectedCategory?.id,
          },
        },
      },
    })
  }
}
