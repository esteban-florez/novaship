import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { cache } from 'react'

const include = {
  categories: true,
  company: true,
  grades: true,
  job: true,
  location: true,
  recruitments: true,
  skills: true,
}

export const getVacants = cache(
  async ({ where, skip, take }: QueryConfig<Prisma.VacantWhereInput>) => {
    return await prisma.vacant.findMany({ where, skip, take, include })
  }
)

export const getVacant = cache(
  async (id: string) => {
    return await prisma.vacant.findUnique({ where: { id }, include })
  }
)
