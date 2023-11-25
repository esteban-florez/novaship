import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'

const query = {
  include: {
    task: {
      include: {
        person: true,
      },
    },
    subtask: {
      include: {
        task: {
          include: {
            person: true,
          },
        },
      },
    },
  },
}

export const getRevision = cache(async ({ where, skip, take }: QueryConfig<Prisma.RevisionWhereInput>) => {
  return await prisma.revision.findFirst({
    skip,
    take,
    where,
    ...query,
  })
})
