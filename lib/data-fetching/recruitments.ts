import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'

const include = {
  vacant: {
    include: {
      company: true,
      job: true,
    },
  },
  internship: {
    include: {
      person: true,
      grade: true,
    },
  },
}

export const getRecruitments = cache(
  async ({ where, skip, take }: QueryConfig<Prisma.RecruitmentWhereInput>) => {
    const orderBy = { createdAt: 'desc' } as const
    return await prisma.recruitment.findMany({ where, skip, take, include, orderBy })
  }
)

export const getRecruitment = cache(
  async (id: string) => {
    return await prisma.recruitment.findUnique({ where: { id }, include })
  }
)
