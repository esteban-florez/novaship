import prisma from '../client'
import data from '@/prisma/seeds-data.json'
import { getRandomValueFromArray } from '@/lib/utils/array'
import { seederQueries } from '../seed'
import { random } from '@/lib/utils/number'

const experiences = data.experiences

export default async function experience() {
  const profilesCount = await prisma.profile.count()

  for (let i = 1; i <= seederQueries.experiences; i++) {
    const toDate = new Date()
    toDate.setDate(toDate.getDate() + random(25, 410))

    const skip = random(1, profilesCount - 1)
    const selectedProfile = await prisma.profile.findFirst({ skip })

    await prisma.experience.create({
      data: {
        name: getRandomValueFromArray(experiences.names),
        description: getRandomValueFromArray(experiences.descriptions),
        phone: random(75000000000, 79000000000).toString(),
        role: getRandomValueFromArray(experiences.roles),
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
