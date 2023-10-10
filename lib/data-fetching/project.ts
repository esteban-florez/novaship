import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'

// TODO -> optimize query
const query = {
  include: {
    person: true,
    team: {
      include: {
        leader: true,
        memberships: {
          include: {
            person: true,
          },
        },
      },
    },
    categories: true,
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
