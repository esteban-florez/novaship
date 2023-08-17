import prisma from '../client'
import data from '@/prisma/data/experiences.json'
import { seederQueries } from '../seed'
import numbers from '@/lib/utils/number'
import collect from '@/lib/utils/collection'

const experiences = data

export default async function experience() {
  const profilesCount = await prisma.profile.count()

  for (let i = 1; i <= seederQueries.experiences; i++) {
    const toDate = new Date()
    toDate.setDate(toDate.getDate() + numbers(25, 410).randomBetween())

    const skip = numbers(1, profilesCount - 1).randomBetween()
    const selectedProfile = await prisma.profile.findFirst({ skip })

    await prisma.experience.create({
      data: {
        name: collect(experiences.names).random().first(),
        description: collect(experiences.descriptions).random().first(),
        role: collect(experiences.roles).random().first(),
        from: new Date(),
        to: toDate,
        profile: {
          connect: {
            id: selectedProfile?.id,
          },
        },
      },
    })
  }
}
