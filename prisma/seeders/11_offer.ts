import prisma from '../client'
import data from '@/prisma/data/offers.json'
import numbers from '@/lib/utils/number'
import types from '@/lib/utils/types'
import { Mode, Schedule } from '@prisma/client'
import collect from '@/lib/utils/collection'
import { ExpireOptions } from '@/lib/validation/expiration-dates'

export default async function offer() {
  const MAX = data.titles.length
  const companies = await prisma.company.findMany({ select: { id: true } })
  const locations = await prisma.location.findMany({ select: { id: true } })
  const jobs = await prisma.job.findMany({ select: { id: true } })
  const skills = await prisma.skill.findMany({ select: { id: true } })
  const categories = await prisma.category.findMany({ select: { id: true } })

  for (let i = 0; i < MAX; i++) {
    const position = numbers(MAX - 1).random()
    const title = data.titles[position]
    const description = data.titles[position]

    const date = new Date()
    date.setDate(date.getDate() + numbers(ExpireOptions).randomValue())

    await prisma.offer.create({
      data: {
        title,
        description,
        limit: numbers(10, 50).random(),
        mode: types(Mode).random(),
        hours: numbers(10, 50).random(),
        salary: numbers(80, 520).random(),
        schedule: types(Schedule).random(),
        jobId: collect(jobs).random().first().id,
        companyId: collect(companies).random().first().id,
        locationId: collect(locations).random().first().id,
        categories: {
          connect: collect(categories).random(6).all(),
        },
        skills: {
          connect: collect(skills).random(5).all(),
        },
        expiresAt: date,
      },
    })
  }
}
