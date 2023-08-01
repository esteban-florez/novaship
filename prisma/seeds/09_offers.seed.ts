import { getRandomValueFromArray, getRandomValuesFromPositionInArray } from "@/lib/utils/array"
import prisma from "../client"
import data from '@/prisma/seeds-data.json'
import { random } from "@/lib/utils/number"
import { getRandomValueFromType } from "@/lib/utils/types"
import { Mode, Schedule, Target } from "@prisma/client"
import { seederQueries } from "../seed"

const offers = data.offers

const ExpireOptions = [1, 3, 5, 7, 15, 30]

export default async function offer() {
  const companiesCount = await prisma.company.count()

  for (let i = 1; i <= seederQueries.offers; i++) {
    const { firstPosition: name, secondPosition: description } = getRandomValuesFromPositionInArray(offers.titles, offers.descriptions)

    const skip = random(1, companiesCount - 1)
    const selectedCompany = await prisma.company.findFirst({ skip  })

    const date = new Date()
    date.setDate(date.getDate() + ExpireOptions[Math.floor(Math.random() * ExpireOptions.length)])

    await prisma.offer.create({
      data: {
        title: name,
        description: description,
        limit: random(10, 50),
        mode: getRandomValueFromType(Mode),
        salary: random(80, 520),
        schedule: getRandomValueFromType(Schedule),
        target: getRandomValueFromType(Target),
        expiresAt: date,
        company: {
          connect: {
            id: selectedCompany?.id
          }
        },
        location: {
          connect: {
            title: getRandomValueFromArray(data.locations)
          }
        }
      }
    })
  }
}