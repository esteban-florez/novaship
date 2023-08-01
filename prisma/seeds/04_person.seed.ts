import { random } from "@/lib/utils/number"
import prisma from "../client"
import data from '@/prisma/seeds-data.json'
import { getRandomValueFromArray } from "@/lib/utils/array"
import { seederQueries } from "../seed"

const persons = data.users

export default async function person() {
  const fullname = `${getRandomValueFromArray(persons.names)} ${getRandomValueFromArray(persons.surnames)}`

  for (let i = 1; i <= seederQueries.person; i++) {
    await prisma.authUser.create({
      data: {
        type: "PERSON",
        person: {
          create: {
            name: fullname,
            email: `u${i}@user.dev`,
            phone: random(10000000000, 11000000000).toString(),
            bio: getRandomValueFromArray(persons.descriptions),
            ci: random(100000, 40000000).toString(),
            birth: new Date(),
          }
        }
      },
    })
  }
}
