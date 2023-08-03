import prisma from '../client'
import types from '@/lib/utils/types'
import { seederQueries } from '../seed'
import numbers from '@/lib/utils/number'
import { Platform } from '@prisma/client'
import { randomUUID } from 'crypto'

export default async function interview() {
  const postulationsCount = await prisma.postulation.count()
  const recruitmentsCount = await prisma.recruitment.count()

  for (let i = 1; i <= seederQueries.interviews; i++) {
    const skipPostulations = numbers(1, postulationsCount - 1).randomBetween()
    const skipRecruitments = numbers(1, recruitmentsCount - 1).randomBetween()
    const selectedPostulation = await prisma.postulation.findFirst({ skip: skipPostulations })
    const selectedRecruitment = await prisma.recruitment.findFirst({ skip: skipRecruitments })

    await prisma.interview.create({
      data: {
        date: new Date(),
        link: randomUUID(),
        platform: types(Platform).random(),
        postulation: {
          connect: {
            id: selectedPostulation?.id,
          },
        },
        recruitment: {
          connect: {
            id: selectedRecruitment?.id,
          },
        },
      },
    })
  }
}
