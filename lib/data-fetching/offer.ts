import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'

interface UserOffer {
  id: string
  userId: string
}

export const getMyOffer = cache(async ({ id, userId }: UserOffer) => {
  return await prisma.offer.findFirst({
    where: {
      id,
      companyId: userId,
    },
    include: {
      skills: {
        select: {
          id: true,
          title: true,
        },
      },
      categories: {
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
    },
  })
})

export const getOffer = cache(async ({ id }: { id: string }) => {
  return await prisma.offer.findFirst({
    where: {
      id,
    },
    include: {
      skills: {
        select: {
          id: true,
          title: true,
        },
      },
      categories: {
        select: {
          id: true,
          title: true,
        },
      },
      location: {
        select: {
          title: true,
        },
      },
      hiring: {
        select: {
          id: true,
          personId: true,
          status: true,
          person: {
            select: {
              name: true,
            },
          },
          interviews: true,
        },
      },
      company: {
        select: {
          name: true,
          description: true,
        },
      },
    },
  })
})

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
