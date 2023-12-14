import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'

export const getInvitationToTeam = cache(async ({ userId, teamId }: { userId: string, teamId: string }) => {
  return await prisma.invitation.findFirst({
    where: {
      personId: userId,
      teamId,
    },
  })
})

export const getInvitations = cache(async ({ where, skip, take }: QueryConfig<Prisma.InvitationWhereInput>) => {
  return await prisma.invitation.findMany({
    where: {
      ...where,
    },
    select: {
      id: true,
      status: true,
      interested: true,
      updatedAt: true,
      person: {
        select: {
          id: true,
          name: true,
        },
      },
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
