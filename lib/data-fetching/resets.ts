import prisma from '@/prisma/client'
import { cache } from 'react'

export const getReset = cache(
  async (id: string) => await prisma.resets.findUnique({
    where: { id },
    include: {
      authUser: {
        include: {
          person: true,
          company: true,
          admin: true,
          institute: true,
        },
      },
    },
  })
)
