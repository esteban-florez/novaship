import prisma from '../client'
import grades from '@/prisma/data/grades.json'

export default async function grade() {
  await prisma.grade.createMany({
    data: grades.map((grade) => ({ title: grade })),
  })
}
