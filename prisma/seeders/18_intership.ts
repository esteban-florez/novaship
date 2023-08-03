import prisma from '../client'
import { seederQueries } from '../seed'
import numbers from '@/lib/utils/number'
import data from '@/prisma/data/interships.json'
import collect from '@/lib/utils/collection'

const interships = data

export default async function intership() {
  const profilesCount = await prisma.profile.count()
  const institutesCount = await prisma.profile.count()

  for (let i = 1; i <= seederQueries.reviews; i++) {
    const skipProfile = numbers(1, profilesCount - 1).randomBetween()
    const skipInstitute = numbers(1, institutesCount - 1).randomBetween()
    const selectedProfile = await prisma.profile.findFirst({ skip: skipProfile })
    const selectedInstitute = await prisma.institute.findFirst({ skip: skipInstitute })

    await prisma.internship.create({
      data: {
        description: collect(interships).random().first(),
        profile: {
          connect: {
            id: selectedProfile?.id,
          },
        },
        institute: {
          connect: {
            id: selectedInstitute?.id,
          },
        },

      },
    })
  }
}
