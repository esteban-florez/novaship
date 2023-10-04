import lucia from '@/lib/auth/lucia'
import numbers from '@/lib/utils/number'
import prisma from '../client'
import persons from '@/prisma/data/persons.json'
import { seederQueries } from '../seed'
import collect from '@/lib/utils/collection'
import { Gender } from '@prisma/client'
import types from '@/lib/utils/types'

export default async function person() {
  const skills = await prisma.skill.findMany({ select: { id: true } })
  const categories = await prisma.category.findMany({ select: { id: true } })
  const locations = await prisma.location.findMany({ select: { id: true } })
  const grades = await prisma.grade.findMany({ select: { id: true } })
  const names = collect(persons.names)
  const surnames = collect(persons.surnames)
  const descriptions = collect(persons.descriptions)

  for (let i = 0; i < seederQueries.persons; i++) {
    const name = names.random().first()
    const surname = surnames.random().first()
    const fullname = `${name} ${surname}`
    const email = `u${i}@user.dev`

    const authUser = await lucia.createUser({
      primaryKey: {
        providerId: 'email',
        providerUserId: email,
        password: 'Password_3',
      },
      attributes: { type: 'PERSON' },
    })

    await prisma.person.create({
      data: {
        name: fullname,
        email,
        phone: numbers().phone(),
        description: descriptions.random().first(),
        ci: numbers().ci(),
        birth: new Date(),
        employable: numbers(1, 2).random() === 1,
        gender: types(Gender).random(),
        grades: {
          connect: collect(grades).random().first(),
        },
        location: {
          connect: collect(locations).random().first(),
        },
        skills: {
          connect: collect(skills).random(5).all(),
        },
        categories: {
          connect: collect(categories).random(5).all(),
        },
        authUser: {
          connect: {
            id: authUser.id,
          },
        },
      },
    })
  }
}
