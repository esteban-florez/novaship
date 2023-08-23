import prisma from '../client'
import data from '@/prisma/data/profiles.json'
import dataFields from '@/prisma/data/fields.json'
import { seederQueries } from '../seed'
import collect from '@/lib/utils/collection'
import numbers from '@/lib/utils/number'
import { days } from '@/lib/translations'
import { type Schedule } from '@/lib/types'

const profiles = data
const fields = dataFields

export default async function profile() {
  const locationCount = await prisma.location.count()
  const skillsCount = await prisma.skill.count()

  for (let i = 1; i <= seederQueries.profiles; i++) {
    const locationSkip = numbers(1, locationCount - 1).randomBetween()
    const selectedLocation = await prisma.location.findFirst({ skip: locationSkip })
    const skillsSkip = numbers(1, skillsCount - 1).randomBetween()
    const selectedSkill = await prisma.skill.findFirst({ skip: skillsSkip })

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

    await prisma.profile.create({
      data: {
        title: collect(profiles.titles).random().first(),
        description: collect(profiles.descriptions).random().first(),
        schedule,
        person: {
          connect: {
            email: `u${i}@user.dev`,
          },
        },
        location: {
          connect: {
            id: selectedLocation?.id,
          },
        },
        fields: {
          connect: {
            title: collect(fields).random().first(),
          },
        },
        skills: {
          connect: {
            id: selectedSkill?.id,
          },
        },
      },
    })
  }
}
