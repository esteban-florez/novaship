import prisma from '../client'
import { seederQueries } from '../seed'
import reviewsData from '@/prisma/data/reviews.json'
import collect from '@/lib/utils/collection'

export default async function review() {
  const persons = collect(await prisma.person.findMany({ select: { id: true } }))
  const companies = collect(await prisma.company.findMany({ select: { id: true } }))
  const reviews = collect(reviewsData)

  for (let i = 1; i <= seederQueries.reviews; i++) {
    await prisma.review.create({
      data: {
        content: reviews.random().first(),
        personId: persons.random().first().id,
        companyId: companies.random().first().id,
      },
    })
  }
}
