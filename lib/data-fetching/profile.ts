import prisma from '@/prisma/client'
import { cache } from 'react'

export const getUserProfileData = cache(async ({ id }: { id: string }) => {
  return await prisma.person.findUniqueOrThrow({
    where: { id },
    include: {
      categories: {
        select: {
          id: true,
          title: true,
        },
      },
      experiences: {
        select: {
          id: true,
          name: true,
          description: true,
          from: true,
          to: true,
          job: {
            select: {
              title: true,
            },
          },
        },
        orderBy: {
          name: 'desc',
        },
      },
      grades: {
        select: {
          id: true,
          title: true,
        },
        orderBy: {
          title: 'asc',
        },
      },
      hirings: {
        select: {
          id: true,
          offer: {
            select: {
              id: true,
              title: true,
              description: true,
              categories: {
                select: {
                  id: true,
                  title: true,
                },
              },
              company: {
                select: {
                  id: true,
                  name: true,
                },
              },
              job: {
                select: {
                  title: true,
                },
              },

            },
          },
        },
        where: {
          status: 'ACCEPTED',
        },
      },
      // jobs: {
      //   select: {
      //     id: true,
      //     title: true,
      //   },
      //   orderBy: {
      //     title: 'desc'
      //   }
      // },
      location: {
        select: {
          id: true,
          title: true,
        },
      },
      skills: {
        select: {
          id: true,
          title: true,
        },
        orderBy: {
          title: 'asc',
        },
      },
      projects: {
        select: {
          id: true,
          title: true,
          description: true,
          categories: {
            select: {
              id: true,
              title: true,
            },
          },
          code: true,
          team: {
            select: {
              _count: {
                select: {
                  memberships: true,
                },
              },
            },
          },
        },
        where: {
          OR: [
            { personId: id },
            {
              team: {
                OR: [
                  {
                    leader: {
                      OR: [{ personId: id }, { companyId: id }],
                    },
                  },
                  {
                    memberships: {
                      some: {
                        personId: id,
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  })
})
