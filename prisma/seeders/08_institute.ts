import lucia from '@/lib/lucia'
import prisma from '../client'
import data from '@/prisma/data/institutes.json'
import numbers from '@/lib/utils/number'
import { seederQueries } from '../seed'

const institutes = data

export default async function institute() {
  const locationCount = await prisma.location.count()

  for (let i = 1; i <= seederQueries.institute; i++) {
    const skip = numbers(1, locationCount - 1).randomBetween()
    const selectedLocation = await prisma.location.findFirst({ skip })
    const position = numbers(institutes.names.length - 1).randomBetween()
    const name = institutes.names[position]
    const description = institutes.descriptions[position]
    const email = `i${i}@institute.dev`

    const authUser = await lucia.createUser({
      primaryKey: {
        providerId: 'email',
        providerUserId: email,
        password: 'Password_3',
      },
      attributes: { type: 'INSTITUTE' },
    })

    await prisma.institute.create({
      data: {
        name,
        description,
        email,
        phone: numbers().randomPhone(),
        certification: 'PENDING',
        authUser: {
          connect: {
            id: authUser.id,
          },
        },
        location: {
          connect: {
            id: selectedLocation?.id,
          },
        },
      },
    })
  }
}
