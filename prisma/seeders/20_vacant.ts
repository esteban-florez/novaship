import numbers from '@/lib/utils/number'
import prisma from '../client'
import collect from '@/lib/utils/collection'
import data from '@/prisma/data/vacants.json'

export default async function category() {
  const MAX = data.length
  const jobs = await prisma.job.findMany({ select: { id: true } })
  const companies = await prisma.company.findMany({ select: { id: true } })
  const locations = await prisma.location.findMany({ select: { id: true } })
  const categories = await prisma.category.findMany({ select: { id: true } })
  const skills = await prisma.skill.findMany({ select: { id: true } })
  const grades = await prisma.grade.findMany({ select: { id: true } })

  for (let i = 0; i < MAX; i++) {
    await prisma.vacant.create({
      data: {
        title: data[i],
        limit: numbers(1, 10).random(),
        jobId: collect(jobs).random().first().id,
        companyId: collect(companies).random().first().id,
        locationId: collect(locations).random().first().id,
        grades: {
          connect: collect(grades).random(2).all(),
        },
        categories: {
          connect: collect(categories).random(5).all(),
        },
        skills: {
          connect: collect(skills).random(5).all(),
        },
      },
    })
  }
}
