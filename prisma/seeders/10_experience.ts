import prisma from '../client'
import experiences from '@/prisma/data/experiences.json'
import numbers from '@/lib/utils/number'
import collect from '@/lib/utils/collection'

export default async function experience() {
  const MAX = experiences.names.length
  const persons = await prisma.person.findMany({ select: { id: true } })
  const jobs = await prisma.job.findMany({ select: { id: true } })

  for (let i = 0; i < MAX; i++) {
    const fromDate = new Date()
    const toDate = new Date()
    fromDate.setDate(fromDate.getDate() - numbers(60, 430).random())
    toDate.setDate(toDate.getDate() - numbers(30, 400).random())

    await prisma.experience.create({
      data: {
        name: collect(experiences.names).random().first(),
        description: collect(experiences.descriptions).random().first(),
        from: fromDate,
        to: toDate,
        personId: collect(persons).random().first().id,
        jobId: collect(jobs).random().first().id,
      },
    })
  }
}
