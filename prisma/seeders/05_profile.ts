import prisma from '../client'
import data from '@/prisma/data/profiles.json'
import dataFields from '@/prisma/data/fields.json'
import dataSkills from '@/prisma/data/skills.json'
import { seederQueries } from '../seed'
import collect from '@/lib/utils/collection'
import numbers from '@/lib/utils/number'

const profiles = data
const fields = dataFields
const skills = dataSkills

export default async function profile() {
  const locationCount = await prisma.location.count()

  for (let i = 1; i <= seederQueries.profiles; i++) {
    const skip = numbers(1, locationCount - 1).randomBetween()
    const selectedLocation = await prisma.location.findFirst({ skip })

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
            title: collect(skills).random().first(),
          },
        },
      },
    })
  }
}
