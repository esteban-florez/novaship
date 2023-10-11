import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'

const query = {
  include: {
    revisions: true,
    participations: {
      include: {
        person: true,
      },
    },
    subtasks: {
      include: {
        revisions: true,
      },
    },
  },
}

export const getMyTask = cache(async ({ id, userId }: { id: string, userId: string }) => {
  return await prisma.task.findFirst({
    where: {
      id,
      project: {
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
    },
    ...query,
  })
})

export const getTask = cache(async ({ id, where }: { id: string, where?: Prisma.TaskWhereInput }) => {
  return await prisma.task.findFirst({
    where: {
      id,
      ...where,
    },
    ...query,
  })
})

export const deleteTask = async ({ id, userId }: { id: string, userId: string }) => {
  return await prisma.task.deleteMany({
    where: {
      id,
      project: {
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
    },
  })
}
