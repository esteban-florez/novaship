import prisma from '../client'
import { seederQueries } from '../seed'
import numbers from '@/lib/utils/number'
import data from '@/prisma/data/reviews.json'
import collect from '@/lib/utils/collection'

const reviews = data

export default async function review() {
  const profilesCount = await prisma.profile.count()
  const companiesCount = await prisma.company.count()

  for (let i = 1; i <= seederQueries.reviews; i++) {
    const skipProfiles = numbers(1, profilesCount - 1).randomBetween()
    const skipCompanies = numbers(1, companiesCount - 1).randomBetween()
    const selectedProfile = await prisma.profile.findFirst({ skip: skipProfiles })
    const selectedCompany = await prisma.company.findFirst({ skip: skipCompanies })

    await prisma.review.create({
      data: {
        content: collect(reviews).random().first(),
        profile: {
          connect: {
            id: selectedProfile?.id,
          },
        },
        company: {
          connect: {
            id: selectedCompany?.id,
          },
        },
      },
    })
  }
}
