import prisma from "../client"
import { seederQueries } from "../seed"
import { random } from "@/lib/utils/number"
import { getRandomValueFromArray } from "@/lib/utils/array"
import data from '@/prisma/seeds-data.json'

const interships = data.interships

export default async function intership() {
  const profilesCount = await prisma.profile.count()
  const institutesCount = await prisma.profile.count()

  for (let i = 1; i <= seederQueries.reviews; i++) {
    const skipProfile = random(1, profilesCount - 1)
    const skipInstitute = random(1, institutesCount - 1)
    const selectedProfile = await prisma.profile.findFirst({ skip: skipProfile })
    const selectedInstitute = await prisma.institute.findFirst({ skip: skipInstitute })
  
    await prisma.internship.create({
      data: {
        description: getRandomValueFromArray(interships),
        profile: {
          connect: {
            id: selectedProfile?.id
          }
        },
        institute: {
          connect: {
            id: selectedInstitute?.id
          }
        },
        
      }
    })
  }
}