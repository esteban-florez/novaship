import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { redirect } from 'next/navigation'
import { cache } from 'react'

// TODO -> añadir categorias.
export const getMyTeams = cache(async ({ userId }: { userId: string }) => {
  return await prisma.team.findMany({
    where: {
      leader: {
        OR: [
          { personId: userId },
          { companyId: userId }
        ]
      },
    },
    include: {
      memberships: {
        include: {
          person: true,
        },
      },
    },
  })
})

export const getTeams = cache(async ({ where, skip, take }: QueryConfig<Prisma.TeamWhereInput>) => {
  return await prisma.team.findMany({
    skip,
    take,
    where,
    include: {
      memberships: {
        include: {
          person: true,
        },
      },
    },
  })
})

export const getTeam = cache(async (id: string) => {
  try {
    return await prisma.team.findUniqueOrThrow({
      where: { id },
      include: {
        leader: {
          include: {
            person: true,
            company: true
          }
        },
        categories: true,
        contracts: true,
        projects: {
          include: {
            categories: true,
          },
        },
        memberships: {
          include: {
            person: {
              include: {
                grades: true,
                location: true,
              },
            },
          },
        },
      },
    })
  } catch (error) {
    console.log(error)
    redirect('/home/teams')
  }
})
