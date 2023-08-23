import collect from '@/lib/utils/collection'
import prisma from '../client'
import { seederQueries } from '../seed'

export default async function candidacy() {
  const persons = collect(await prisma.person.findMany({ select: { id: true } }))

  for (let i = 1; i <= seederQueries.candidacies; i++) {
    await prisma.candidacy.create({
      data: {
        personId: persons.random().first().id,
      },
    })
  }
}
