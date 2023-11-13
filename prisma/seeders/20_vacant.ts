import numbers from '@/lib/utils/number'
import prisma from '../client'
import collect from '@/lib/utils/collection'
import { DURATIONS } from '@/lib/shared/durations'

export default async function vacant() {
  const jobs = await prisma.job.findMany({ select: { id: true } })
  const companies = await prisma.company.findMany({ select: { id: true } })
  const locations = await prisma.location.findMany({ select: { id: true } })
  const categories = await prisma.category.findMany({ select: { id: true } })
  const skills = await prisma.skill.findMany({ select: { id: true } })
  const grades = await prisma.grade.findMany({ select: { id: true } })
  const durations = collect(Object.keys(DURATIONS))

  for (let i = 0; i < 20; i++) {
    const duration = Number(durations.random().first())

    await prisma.vacant.create({
      data: {
        duration,
        jobId: collect(jobs).random().first().id,
        description: 'Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.',
        limit: numbers(1, 10).random(),
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
