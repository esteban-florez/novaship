import prisma from '../client'
import types from '@/lib/utils/types'
import { seederQueries } from '../seed'
import { Interested, Status } from '@prisma/client'
import collect from '@/lib/utils/collection'

export default async function recruitment() {
  const internships = await prisma.internship.findMany({ select: { id: true } })
  const vacants = await prisma.vacant.findMany({ select: { id: true } })

  for (let i = 0; i < seederQueries.recruitments; i++) {
    await prisma.recruitment.create({
      data: {
        status: types(Status).random(),
        internshipId: collect(internships).random().first().id,
        interested: types(Interested).random(),
        vacantId: collect(vacants).random().first().id,
      },
    })
  }
}
