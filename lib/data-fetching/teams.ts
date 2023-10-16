import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { redirect } from 'next/navigation'
import { cache } from 'react'
import { type TeamsFull } from '../types'

const query = {
  include: {
    leader: {
      include: {
        person: true,
        company: true,
      },
    },
    categories: true,
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
}

// TODO -> añadir categorias.
export const getMyTeams = cache(async ({ userId }: { userId: string }) => {
  return await prisma.team.findMany({
    where: {
      leader: {
        OR: [
          { personId: userId },
          { companyId: userId },
        ],
      },
    },
    ...query,
  })
})

export const getTeams = cache(async ({ where, skip, take }: QueryConfig<Prisma.TeamWhereInput>) => {
  return await prisma.team.findMany({
    skip,
    take,
    where,
    ...query,
  }) as TeamsFull[]
})

export const getTeam = cache(async (id: string) => {
  try {
    return await prisma.team.findUniqueOrThrow({
      where: { id },
      ...query,
    })
  } catch (error) {
    console.log(error)
    redirect('/home/teams')
  }
})
