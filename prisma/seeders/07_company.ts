import lucia from '@/lib/auth/lucia'
import numbers from '@/lib/utils/number'
import prisma from '../client'
import companies from '@/prisma/data/companies.json'
import { seederQueries } from '../seed'
import collect from '@/lib/utils/collection'

export default async function company() {
  const locations = await prisma.location.findMany({ select: { id: true } })

  for (let i = 0; i < seederQueries.companies; i++) {
    const position = numbers(companies.names.length - 1).random()
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
        rif: numbers().rif(),
        description,
        phone: numbers().phone(),
        certification: 'PENDING',
        authUser: {
          connect: {
            id: authUser.id,
          },
        },
        location: {
          connect: collect(locations).random().first(),
        },
      },
    })
  }
}
