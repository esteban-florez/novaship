import prisma from '@/prisma/client'
import { cache } from 'react'
import collect from '../utils/collection'

export const getPersonRelatedIds = cache(async ({ id }: { id: string }) => {
  const user = await prisma.person.findFirst({
    where: { id },
    select: {
      categories: {
        select: {
          id: true,
        },
      },
      jobs: {
        select: {
          id: true,
        },
      },
      skills: {
        select: {
          id: true,
        },
      },
    },
  })

  const jobs = collect(user?.jobs ?? []).ids()
  const categories = collect(user?.categories ?? []).ids()
  const skills = collect(user?.skills ?? []).ids()

  return { jobs, categories, skills }
})
