import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'

interface UserOffer {
  id: string
  userId: string
}

// TODO -> optimize query

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
      job: {
        select: {
          title: true,
        },
      },
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
          interested: true,
          person: {
            select: {
              name: true,
              skills: {
                select: {
                  id: true,
                  title: true,
                },
              },
            },
          },
        },
      },
      company: {
        select: {
          name: true,
          description: true,
          image: true,
        },
      },
    },
  })
})

export const getOffers = cache(
  async ({ where, skip, take }: QueryConfig<Prisma.OfferWhereInput>) => {
    return await prisma.offer.findMany({
      where,
      skip,
      take,
      include: {
        categories: true,
        job: true,
        skills: true,
        company: true,
        location: true,
        hiring: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    })
  }
)
