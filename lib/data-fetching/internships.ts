import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'

const include = {
  categories: true,
  grade: true,
  person: true,
  institute: true,
  recruitments: {
    include: {
      vacant: true,
    },
  },
}

export const getInternships = cache(
  async (config: QueryConfig<Prisma.InternshipWhereInput> = {}) => {
    const { where, skip, take } = config
    return await prisma.internship.findMany({
      where,
      skip,
      take,
      include,
    })
  }
)

export const getInternship = cache(
  async (id: string) => {
    return await prisma.internship.findUnique({
      where: { id },
      include,
    })
  }
)
