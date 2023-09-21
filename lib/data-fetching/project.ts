import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'

export const getProjects = cache(async ({ where, skip, take }: QueryConfig<Prisma.ProjectWhereInput>) => {
  return await prisma.project.findMany({
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
      team: {
        include: {
          memberships: {
            include: {
              person: {
                select: {
                  id: true,
                  name: true,
                },
              },
              company: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },
    orderBy: {
      title: 'asc',
    },
  })
})
