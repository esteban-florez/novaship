import prisma from '../client'
import data from '@/prisma/data/profiles.json'
import dataFields from '@/prisma/data/fields.json'
import { seederQueries } from '../seed'
import collect from '@/lib/utils/collection'
import numbers from '@/lib/utils/number'

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

    await prisma.profile.create({
      data: {
        title: collect(profiles.titles).random().first(),
        description: collect(profiles.descriptions).random().first(),
        schedule: {},
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
