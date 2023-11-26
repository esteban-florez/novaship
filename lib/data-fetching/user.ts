import prisma from '@/prisma/client'
import { cache } from 'react'
import collect from '../utils/collection'

export const getPersonSkillsIds = cache(async ({ id }: { id: string }) => {
  const user = await prisma.person.findFirst({
    where: { id },
    select: {
      skills: {
        select: {
          id: true,
        },
      },
    },
  })

  return collect(user?.skills ?? []).ids()
})

export const getSuggestedUsers = cache(async ({ offerId, skills }: { offerId: string, skills: string[] }) => {
  return await prisma.person.findMany({
    where: {
      skills: {
        some: {
          id: { in: skills },
        },
      },
      hirings: {
        none: {
          offerId: { not: offerId },
        },
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      skills: {
        select: {
          id: true,
          title: true,
        },
      },
    },
    take: 12,
  })
})

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
