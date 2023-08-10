import lucia from '@/lib/auth/lucia'
import numbers from '@/lib/utils/number'
import prisma from '../client'
import data from '@/prisma/data/companies.json'
import { seederQueries } from '../seed'

const companies = data

export default async function company() {
  const locationCount = await prisma.location.count()

  for (let i = 1; i <= seederQueries.companies; i++) {
    const skip = numbers(1, locationCount - 1).randomBetween()
    const selectedLocation = await prisma.location.findFirst({ skip })
    const position = numbers(companies.names.length - 1).randomBetween()
    const name = companies.names[position]
    const description = companies.descriptions[position]
    const email = `c${i}@company.dev`

    const authUser = await lucia.createUser({
      primaryKey: {
        providerId: 'email',
        providerUserId: email,
        password: 'Password_3',
      },
      attributes: { type: 'COMPANY' },
    })

    await prisma.company.create({
      data: {
        name,
        email,
        description,
        certification: 'PENDING',
        phone: numbers().randomPhone(),
        rif: numbers(1_000_000_000, 9_999_999_999).randomBetween().toString(),
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
