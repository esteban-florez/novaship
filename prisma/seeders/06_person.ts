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
  const minimumBirth = new Date()
  minimumBirth.setFullYear(minimumBirth.getFullYear() - 18)
  const olderRange = numbers(0, 10)

  const images = collect(['1.jpeg', '2.webp', '3.webp'])

  for (let i = 0; i < seederQueries.persons; i++) {
    const name = names.random().first()
    const surname = surnames.random().first()
    const fullname = `${name} ${surname}`
    const email = `u${i}@user.dev`
    const olderBy = olderRange.random()
    const birth = new Date(minimumBirth)
    birth.setFullYear(birth.getFullYear() - olderBy)

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
        ci: i !== 1 ? numbers().ci() : '123123',
        birth,
        image: '/person' + images.random().first(),
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
        schedule: new Array(24).fill(null).map((_, hour) => {
          const nineToFive = hour >= 9 && hour <= 17

          return new Array(7).fill(null).map((_, day) => {
            const isSaturday = day === 5

            if (isSaturday) {
              const sevenToTwelve = hour >= 7 && hour <= 12
              return sevenToTwelve
            }

            const sunday = day === 6
            return !sunday && nineToFive
          })
        }),
      },
    })
  }
}
