import prisma from '../client'
import { seederQueries } from '../seed'
import { random } from '@/lib/utils/number'

export default async function candidacy() {
  const profilesCount = await prisma.profile.count()

  for (let i = 1; i <= seederQueries.candidacies; i++) {
    const skip = random(1, profilesCount - 1)
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
