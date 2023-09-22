import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'

export const getOffers = cache(async ({ where, skip, take }: QueryConfig<Prisma.OfferWhereInput>) => {
  return await prisma.offer.findMany({
    where,
    skip,
    take,
    include: {
      categories: {
        select: {
          id: true,
          title: true,
        },
      },
      job: {
        select: {
          id: true,
          title: true,
        },
      },
      skills: {
        select: {
          id: true,
          title: true,
        },
      },
      company: {
        select: {
          id: true,
          name: true,
        },
      },
      location: {
        select: {
          title: true,
        },
      },
      hiring: {
        select: {
          personId: true,
        },
      },
    },
    orderBy: {
      title: 'asc',
    },
  })
})
