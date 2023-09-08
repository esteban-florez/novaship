import prisma from '../client'
import types from '@/lib/utils/types'
import { seederQueries } from '../seed'
import { Platform } from '@prisma/client'
import { randomUUID } from 'crypto'
import collect from '@/lib/utils/collection'

export default async function interview() {
  const hirings = await prisma.hiring.findMany({ select: { id: true } })

  for (let i = 0; i < seederQueries.interviews; i++) {
    await prisma.interview.create({
      data: {
        date: new Date(),
        link: randomUUID(),
        platform: types(Platform).random(),
        hiringId: collect(hirings).random().first().id,
      },
    })
  }
}
