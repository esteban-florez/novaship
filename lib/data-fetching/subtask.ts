import prisma from '@/prisma/client'
import { cache } from 'react'

const query = {
  include: {
    revisions: true,
    subparticipations: {
      include: {
        person: true,
      },
    },
    task: {
      include: {
        project: true,
        person: true,
      },
    },
  },
}

export const getSubtask = cache(async ({ id }: { id: string }) => {
  return await prisma.subtask.findFirst({
    where: {
      id,
    },
    ...query,
  })
})

export const getMySubtask = cache(async ({ id, userId }: { id: string, userId: string }) => {
  return await prisma.subtask.findFirst({
    where: {
      id,
      task: {
        OR: [
          { personId: userId },
          {
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
        ],
      },
    },
    ...query,
  })
})

export const deleteSubtask = async ({ id, userId }: { id: string, userId: string }) => {
  return await prisma.subtask.deleteMany({
    where: {
      id,
      task: {
        OR: [
          { personId: userId },
          {
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
        ],
      },
    },
  })
}
