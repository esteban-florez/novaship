import prisma from '@/prisma/client'
import { cache } from 'react'

export const getMembersByProject = cache(async ({ id }: { id: string }) => {
  return await prisma.membership.findMany({
    where: {
      team: {
        projects: {
          some: {
            id,
          },
        },
      },
    },
    include: {
      person: true,
    },
  })
})
