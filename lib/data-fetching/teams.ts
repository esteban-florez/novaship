import prisma from '@/prisma/client'
import { redirect } from 'next/navigation'
import { cache } from 'react'

export const getTeam = cache(async (id: string) => {
  try {
    return await prisma.team.findUniqueOrThrow({
      where: { id },
      include: {
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
            company: {
              include: {
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
