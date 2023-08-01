import { getRandomValueFromArray, getRandomValuesFromPositionInArray } from "@/lib/utils/array"
import prisma from "../client"
import data from '@/prisma/seeds-data.json'
import { random } from "@/lib/utils/number"
import { seederQueries } from "../seed"

const institutes = data.institutes

export default async function institute() {
  const { firstPosition: name, secondPosition: description } = getRandomValuesFromPositionInArray(institutes.names, institutes.descriptions)

  for (let i = 1; i <= seederQueries.institute; i++) {
    await prisma.authUser.create({
      data: {
        type: "INSTITUTE",
        institute: {
          create: {
            name: name,
            description: description,
            email: `i${i}@institute.dev`,
            phone: random(30000000000, 31000000000).toString(),
            certification: 'PENDING',
            location: {
              connect: {
                title: getRandomValueFromArray(data.locations),
              },
            },
          },
        },
      },
    })
  }
}