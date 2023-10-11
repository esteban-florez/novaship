import lucia from '@/lib/auth/lucia'
import numbers from '@/lib/utils/number'
import prisma from '../client'
import companies from '@/prisma/data/companies.json'
import { seederQueries } from '../seed'
import collect from '@/lib/utils/collection'
import coinflip from '@/lib/utils/coinflip'

export default async function company() {
  const locations = collect(await prisma.location.findMany({ select: { id: true } }))
  const positionRange = numbers(companies.names.length - 1)

  for (let i = 0; i < seederQueries.companies; i++) {
    const position = positionRange.random()
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
        certification: '/rif.png',
        authUser: {
          connect: {
            id: authUser.id,
          },
        },
        verifiedAt: coinflip() ? new Date() : null,
        location: {
          connect: locations.random().first(),
        },
      },
    })
  }
}
