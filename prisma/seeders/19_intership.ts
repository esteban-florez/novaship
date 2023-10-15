import prisma from '../client'
import { seederQueries } from '../seed'
import collect from '@/lib/utils/collection'
import numbers from '@/lib/utils/number'
import types from '@/lib/utils/types'
import { Status } from '@prisma/client'

export default async function intership() {
  const persons = collect(await prisma.person.findMany({ select: { id: true } }))
  const institutes = collect(await prisma.institute.findMany({ select: { id: true } }))
  const grades = collect(await prisma.grade.findMany({ select: { id: true } }))
  const categories = collect(await prisma.category.findMany({ select: { id: true } }))

  for (let i = 0; i < seederQueries.internships; i++) {
    await prisma.internship.create({
      data: {
        hours: numbers(20, 60).random(),
        completed: numbers(10, 30).random(),
        status: types(Status).random(),
        personId: persons.random().first().id,
        instituteId: institutes.random().first().id,
        gradeId: grades.random().first().id,
        categories: {
          connect: categories.random(5).all(),
        },
      },
    })
  }
}
