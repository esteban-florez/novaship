import prisma from '../client'
import { seederQueries } from '../seed'
import numbers from '@/lib/utils/number'

export default async function candidacy() {
  const profilesCount = await prisma.profile.count()

  for (let i = 1; i <= seederQueries.candidacies; i++) {
    const skip = numbers(1, profilesCount - 1).randomBetween()
    const selectedProfile = await prisma.profile.findFirst({ skip })

    await prisma.candidacy.create({
      data: {
        profile: {
          connect: {
            id: selectedProfile?.id,
          },
        },
      },
    })
  }
}
