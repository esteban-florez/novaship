import prisma from '../client'
import data from '@/prisma/seeds-data.json'
import { getRandomValueFromArray } from '@/lib/utils/array'
import { seederQueries } from '../seed'

const profiles = data.profiles

export default async function profile() {
  for (let i = 1; i <= seederQueries.profiles; i++) {
    await prisma.profile.create({
      data: {
        title: getRandomValueFromArray(profiles.titles),
        description: getRandomValueFromArray(profiles.descriptions),
        schedule: {},
        person: {
          connect: {
            email: `u${i}@user.dev`,
          },
        },
        location: {
          connect: {
            title: getRandomValueFromArray(data.locations),
          },
        },
        fields: {
          connect: {
            title: getRandomValueFromArray(data.fields),
          },
        },
        skills: {
          connect: {
            title: getRandomValueFromArray(data.skills),
          },
        },
      },
    })
  }
}
