import lucia from '@/lib/auth/lucia'
import numbers from '@/lib/utils/number'
import prisma from '../client'
import personData from '@/prisma/data/persons.json'
import { seederQueries } from '../seed'
import collect from '@/lib/utils/collection'
import { days } from '@/lib/translations'
import { type Schedule } from '@/lib/types'

export default async function person() {
  for (let i = 1; i <= seederQueries.persons; i++) {
    const name = collect(personData.names).random().first()
    const surname = collect(personData.surnames).random().first()
    const fullname = `${name} ${surname}`
    const email = `u${i}@user.dev`
    const skills = await prisma.skill.findMany({ select: { id: true } })
    const fields = await prisma.field.findMany({ select: { id: true } })

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
        phone: numbers().randomPhone(),
        description: collect(personData.descriptions).random().first(),
        ci: numbers().randomCI(),
        birth: new Date(),
        qualification: collect(personData.qualifications).random().first(),
        schedule: generateRandomSchedule(),
        skills: {
          connect: collect(skills).random(5).all(),
        },
        fields: {
          connect: collect(fields).random(5).all(),
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

function generateRandomSchedule() {
  const schedule: Schedule = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  }

  const dayKeys = Object.keys(days) as Array<keyof Schedule>

  // TODO -> por ahora sirve pero genera horarios muy poco estándar XD
  dayKeys.forEach(day => {
    let availableHoursCount = 8

    for (let index = 0; index < 23; index++) {
      if (availableHoursCount <= 0) break

      const randomBoolean = Boolean(Math.round(Math.random()))

      if (randomBoolean) {
        schedule[day].push(index)
        availableHoursCount--
      }
    }
  })

  return schedule
}
