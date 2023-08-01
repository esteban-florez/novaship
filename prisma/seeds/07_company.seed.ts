import { random } from "@/lib/utils/number"
import prisma from "../client"
import data from '@/prisma/seeds-data.json'
import { getRandomValueFromArray, getRandomValuesFromPositionInArray } from "@/lib/utils/array"
import { seederQueries } from "../seed"

const companies = data.companies

export default async function company() {
  for (let i = 1; i <= seederQueries.companies; i++) {
    const { firstPosition: name, secondPosition: description } = getRandomValuesFromPositionInArray(companies.names, companies.descriptions)

    await prisma.authUser.create({
      data: {
        type: "COMPANY",
        company: {
          create: {
            name: name,
            email: `c${i}@company.dev`,
            description: description,
            certification: 'PENDING',
            phone: random(80000000000, 81000000000).toString(),
            location: {
              connect: {
                title: getRandomValueFromArray(data.locations)
              }
            }
          }
        }
      },
    })
  }
}
