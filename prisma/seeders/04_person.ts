import lucia from '@/lib/auth/lucia'
import numbers from '@/lib/utils/number'
import prisma from '../client'
import data from '@/prisma/data/persons.json'
import { seederQueries } from '../seed'
import collect from '@/lib/utils/collection'

const persons = data

export default async function person() {
  for (let i = 1; i <= seederQueries.persons; i++) {
    const name = collect(persons.names).random().first()
    const surname = collect(persons.surnames).random().first()
    const fullname = `${name} ${surname}`
    const email = `u${i}@user.dev`

    const authUser = await lucia.createUser({
      primaryKey: {
        providerId: 'email',
        providerUserId: email,
        password: 'Password_3',
      },
      attributes: { type: 'PERSON' },
    })

    await prisma.person.create({
      data: {
        name: fullname,
        email,
        phone: numbers().randomPhone(),
        bio: collect(persons.descriptions).random().first(),
        ci: numbers().randomCI(),
        birth: new Date(),
        authUser: {
          connect: {
            id: authUser.id,
          },
        },
      },
    })
  }
}
