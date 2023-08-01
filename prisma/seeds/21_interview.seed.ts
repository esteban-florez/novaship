import prisma from "../client"
import { getRandomValueFromType } from "@/lib/utils/types"
import { seederQueries } from "../seed"
import { random } from "@/lib/utils/number"
import { Platform } from "@prisma/client"
import { randomUUID } from "crypto"

export default async function interview() {
  const postulationsCount = await prisma.postulation.count()
  const recruitmentsCount = await prisma.recruitment.count()

  for (let i = 1; i <= seederQueries.interviews; i++) {
    const skipPostulations = random(1, postulationsCount - 1)
    const skipRecruitments = random(1, recruitmentsCount - 1)
    const selectedPostulation = await prisma.postulation.findFirst({ skip: skipPostulations })
    const selectedRecruitment = await prisma.recruitment.findFirst({ skip: skipRecruitments })

    await prisma.interview.create({
      data: {
        date: new Date(),
        link: randomUUID(),
        platform: getRandomValueFromType(Platform),
        postulation: {
          connect: {
            id: selectedPostulation?.id
          }
        },
        recruitment: {
          connect: {
            id: selectedRecruitment?.id
          }
        }
      }
    })
  }
}