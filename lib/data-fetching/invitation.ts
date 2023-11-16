import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'

export const getInvitations = cache(async ({ where, skip, take }: QueryConfig<Prisma.InvitationWhereInput>) => {
  return await prisma.invitation.findMany({
    where: {
      ...where,
    },
    select: {
      id: true,
      status: true,
      updatedAt: true,
      team: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    take,
    skip,
  })
})
