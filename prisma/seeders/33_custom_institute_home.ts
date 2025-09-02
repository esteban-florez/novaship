import collect from '@/lib/utils/collection'
import prisma from '../client'

export default async function custom() {
  const institute = await prisma.institute.findFirstOrThrow({ take: 1, select: { id: true } })
  const grades = await prisma.grade.findMany({ take: 5, select: { id: true } })
  const users = await prisma.person.findMany({ skip: 1, take: 5, select: { id: true } })

  const hours = [24, 36, 48, 72]
  const internshipsData = [
    {
      gradeId: collect(grades).random().first().id,
      hours: collect(hours).random().first(),
      instituteId: institute.id,
      personId: collect(users).random().first().id,
    },
    {
      gradeId: collect(grades).random().first().id,
      hours: collect(hours).random().first(),
      instituteId: institute.id,
      personId: collect(users).random().first().id,
    },
    {
      gradeId: collect(grades).random().first().id,
      hours: collect(hours).random().first(),
      instituteId: institute.id,
      personId: collect(users).random().first().id,
    },
    {
      gradeId: collect(grades).random().first().id,
      hours: collect(hours).random().first(),
      instituteId: institute.id,
      personId: collect(users).random().first().id,
    },
    {
      gradeId: collect(grades).random().first().id,
      hours: collect(hours).random().first(),
      instituteId: institute.id,
      personId: collect(users).random().first().id,
    },
  ]

  await prisma.internship.createMany({
    data: internshipsData,
  })
}
