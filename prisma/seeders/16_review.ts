import { getRandomValueFromArray } from '@/lib/utils/array'
import prisma from '../client'
import { seederQueries } from '../seed'
import { random } from '@/lib/utils/number'
import data from '@/prisma/seeds-data.json'

const reviews = data.reviews

export default async function review() {
  const profilesCount = await prisma.profile.count()
  const companiesCount = await prisma.company.count()

  for (let i = 1; i <= seederQueries.reviews; i++) {
    const skipProfiles = random(1, profilesCount - 1)
    const skipCompanies = random(1, companiesCount - 1)
    const selectedProfile = await prisma.profile.findFirst({ skip: skipProfiles })
    const selectedCompany = await prisma.company.findFirst({ skip: skipCompanies })

    await prisma.review.create({
      data: {
        content: getRandomValueFromArray(reviews),
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
