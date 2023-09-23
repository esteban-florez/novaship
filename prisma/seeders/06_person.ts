import lucia from '@/lib/auth/lucia'
import numbers from '@/lib/utils/number'
import prisma from '../client'
import persons from '@/prisma/data/persons.json'
import { seederQueries } from '../seed'
import collect from '@/lib/utils/collection'
import { Gender } from '@prisma/client'
import types from '@/lib/utils/types'

export default async function person() {
  for (let i = 0; i < seederQueries.persons; i++) {
    const skills = await prisma.skill.findMany({ select: { id: true } })
    const categories = await prisma.category.findMany({ select: { id: true } })
    const locations = await prisma.location.findMany({ select: { id: true } })
    const grades = await prisma.grade.findMany({ select: { id: true } })

    const name = collect(persons.names).random().first()
    const surname = collect(persons.surnames).random().first()
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
        description: collect(persons.descriptions).random().first(),
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
