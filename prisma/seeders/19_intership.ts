import prisma from '../client'
import { seederQueries } from '../seed'
import collect from '@/lib/utils/collection'
import numbers from '@/lib/utils/number'
import types from '@/lib/utils/types'
import { Stage } from '@prisma/client'

export default async function intership() {
  const persons = await prisma.person.findMany({ select: { id: true } })
  const institutes = await prisma.institute.findMany({ select: { id: true } })
  const companies = await prisma.company.findMany({ select: { id: true } })
  const grades = await prisma.grade.findMany({ select: { id: true } })
  const categories = await prisma.category.findMany({ select: { id: true } })

  for (let i = 0; i < seederQueries.internships; i++) {
    await prisma.internship.create({
      data: {
        hours: numbers(20, 60).random(),
        completed: numbers(10, 30).random(),
        stage: types(Stage).random(),
        personId: collect(persons).random().first().id,
        instituteId: collect(institutes).random().first().id,
        companyId: collect(companies).random().first().id,
        gradeId: collect(grades).random().first().id,
        categories: {
          connect: collect(categories).random(5).all(),
        },
      },
    })
  }
}
