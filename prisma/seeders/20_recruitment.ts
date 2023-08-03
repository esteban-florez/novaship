import prisma from '../client'
import types from '@/lib/utils/types'
import { seederQueries } from '../seed'
import numbers from '@/lib/utils/number'
import { RecruitmentStatus } from '@prisma/client'

export default async function recruitment() {
  const candidaciesCount = await prisma.candidacy.count()
  const internshipsCount = await prisma.internship.count()

  for (let i = 1; i <= seederQueries.recruitments; i++) {
    const skipCandidacy = numbers(1, candidaciesCount - 1).randomBetween()
    const skipInternship = numbers(1, internshipsCount - 1).randomBetween()
    const selectedCandidacy = await prisma.candidacy.findFirst({ skip: skipCandidacy })
    const selectedInternship = await prisma.internship.findFirst({ skip: skipInternship })

    await prisma.recruitment.create({
      data: {
        status: types(RecruitmentStatus).random(),
        candidacy: {
          connect: {
            id: selectedCandidacy?.id,
          },
        },
        internship: {
          connect: {
            id: selectedInternship?.id,
          },
        },
      },
    })
  }
}
