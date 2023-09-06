import prisma from '../client'
import data from '@/prisma/data/reviews.json'
import collect from '@/lib/utils/collection'

export default async function review() {
  const persons = collect(await prisma.person.findMany({ select: { id: true } }))
  const companies = collect(await prisma.company.findMany({ select: { id: true } }))

  for (let i = 0; i < data.length; i++) {
    await prisma.review.create({
      data: {
        content: collect(data).random().first(),
        personId: persons.random().first().id,
        companyId: companies.random().first().id,
      },
    })
  }
}
