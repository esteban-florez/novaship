import prisma from '../client'
import { seederQueries } from '../seed'
import data from '@/prisma/data/interships.json'
import collect from '@/lib/utils/collection'

const interships = data

export default async function intership() {
  const persons = collect(await prisma.person.findMany({ select: { id: true } }))
  const institutes = collect(await prisma.institute.findMany({ select: { id: true } }))

  for (let i = 1; i <= seederQueries.reviews; i++) {
    await prisma.internship.create({
      data: {
        description: collect(interships).random().first(),
        personId: persons.random().first().id,
        instituteId: institutes.random().first().id,
      },
    })
  }
}
