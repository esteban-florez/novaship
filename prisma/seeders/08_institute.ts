import lucia from '@/lib/auth/lucia'
import prisma from '../client'
import institutes from '@/prisma/data/institutes.json'
import numbers from '@/lib/utils/number'
import { seederQueries } from '../seed'
import collect from '@/lib/utils/collection'

export default async function institute() {
  const locations = collect(await prisma.location.findMany({ select: { id: true } }))
  const positionRange = numbers(institutes.names.length - 1)

  for (let i = 0; i < seederQueries.institute; i++) {
    const position = positionRange.random()
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
        phone: numbers().phone(),
        rif: numbers().rif(),
        certification: 'PENDING',
        authUser: {
          connect: {
            id: authUser.id,
          },
        },
        location: {
          connect: locations.random().first(),
        },
      },
    })
  }
}
