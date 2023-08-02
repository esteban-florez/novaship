import types from '@/lib/utils/types'
import prisma from '../client'
import { seederQueries } from '../seed'
import numbers from '@/lib/utils/number'
import { RecruitmentStatus } from '@prisma/client'

export default async function postulation() {
  const offersCount = await prisma.offer.count()
  const candidaciesCount = await prisma.candidacy.count()
  const internshipsCount = await prisma.internship.count()

  for (let i = 1; i <= seederQueries.postulations; i++) {
    const skipOffer = numbers(1, offersCount - 1).randomBetween()
    const skipCandidacy = numbers(1, candidaciesCount - 1).randomBetween()
    const skipInternship = numbers(1, internshipsCount - 1).randomBetween()
    const selectedOffer = await prisma.offer.findFirst({ skip: skipOffer })
    const selectedCandidacy = await prisma.candidacy.findFirst({ skip: skipCandidacy })
    const selectedInternship = await prisma.internship.findFirst({ skip: skipInternship })

    await prisma.postulation.create({
      data: {
        status: types(RecruitmentStatus).random(),
        offer: {
          connect: {
            id: selectedOffer?.id,
          },
        },
        candidacy: {
          connect: {
            id: selectedCandidacy?.id,
          },
        },
        intern: {
          connect: {
            id: selectedInternship?.id,
          },
        },
      },
    })
  }
}
