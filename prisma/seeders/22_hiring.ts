import prisma from '../client'
import types from '@/lib/utils/types'
import { seederQueries } from '../seed'
import { Interested, Status } from '@prisma/client'
import collect from '@/lib/utils/collection'

export default async function hiring() {
  const offers = await prisma.offer.findMany({ select: { id: true } })
  const persons = await prisma.person.findMany({ select: { id: true } })

  const ids = {
    offerId: collect(offers).random().first().id,
    personId: collect(persons).random().first().id,
  }

  for (let i = 0; i < seederQueries.hirings; i++) {
    await prisma.hiring.create({
      data: {
        status: types(Status).random(),
        interested: types(Interested).random(),
        ...ids,
      },
    })
  }
}
