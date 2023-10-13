import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'
import { type ProjectsFull } from '../types'

// TODO -> optimize query
const query = {
  include: {
    person: true,
    team: {
      include: {
        leader: {
          include: {
            company: true,
            person: true,
          },
        },
        memberships: {
          include: {
            person: true,
          },
        },
      },
    },
    categories: true,
    tasks: {
      include: {
        subtasks: {
          include: {
            revisions: true,
          },
        },
        revisions: true,
        participations: true,
      },
    },
    files: true,
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

// TODO -> check ts error, remove as ProjectsFull
export const getMyProject = cache(async ({ id, userId }: { id: string, userId: string }) => {
  return await prisma.project.findFirst({
    where: {
      id,
      OR: [
        { personId: userId },
        {
          team: {
            leader: {
              OR: [
                { personId: userId },
                { companyId: userId },
              ],
            },
          },
        },
      ],
    },
    ...query,
  }) as ProjectsFull
})

export const deleteProject = async ({ id, where }: { id: string, where: Prisma.ProjectWhereInput }) => {
  return await prisma.project.deleteMany({
    where: {
      id,
      ...where,
    },
  })
}

// TODO -> check ts error, remove as ProjectsFull
export const getProjects = cache(async ({ where, skip, take }: QueryConfig<Prisma.ProjectWhereInput>) => {
  return await prisma.project.findMany({
    where,
    skip,
    take,
    ...query,
    orderBy: {
      title: 'asc',
    },
  }) as ProjectsFull[]
})
