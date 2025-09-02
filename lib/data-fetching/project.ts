import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'

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
        person: true,
        subtasks: {
          include: {
            subparticipations: {
              include: {
                person: true,
              },
            },
            revisions: true,
          },
        },
        revisions: true,
        participations: {
          include: {
            person: true,
          },
        },
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

export const getMemberProject = cache(async ({ id, userId }: { id: string, userId: string }) => {
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
        {
          team: {
            memberships: {
              some: {
                personId: userId,
              },
            },
          },
        },
      ],
    },
    ...query,
  })
})

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
  })
})

export const deleteProject = async ({ id, where }: { id: string, where: Prisma.ProjectWhereInput }) => {
  return await prisma.project.deleteMany({
    where: {
      id,
      ...where,
    },
  })
}

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
