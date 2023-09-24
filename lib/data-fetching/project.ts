import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'

const query = {
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
}

export const getProject = cache(async ({ id, where }: { id: string, where?: Prisma.ProjectWhereInput }) => {
  return await prisma.project.findFirst({
    where: {
      id,
      ...where,
    },
    ...query,
  })
})

export const getProjects = cache(async ({ where, skip, take }: QueryConfig<Prisma.ProjectWhereInput>) => {
  return await prisma.project.findMany({
    where,
    skip,
    take,
    ...query,
    orderBy: {
      title: 'asc',
    },
  })
})
