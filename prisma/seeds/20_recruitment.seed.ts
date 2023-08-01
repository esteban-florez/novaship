import prisma from "../client"
import { getRandomValueFromType } from "@/lib/utils/types"
import { seederQueries } from "../seed"
import { random } from "@/lib/utils/number"
import { RecruitmentStatus } from "@prisma/client"

export default async function recruitment() {
  const candidaciesCount = await prisma.candidacy.count()
  const internshipsCount = await prisma.internship.count()

  for (let i = 1; i <= seederQueries.recruitments; i++) {
    const skipCandidacy = random(1, candidaciesCount - 1)
    const skipInternship = random(1, internshipsCount - 1)
    const selectedCandidacy = await prisma.candidacy.findFirst({ skip: skipCandidacy })
    const selectedInternship = await prisma.internship.findFirst({ skip: skipInternship })
  
    await prisma.recruitment.create({
      data: {
        status: getRandomValueFromType(RecruitmentStatus),
        candidacy: {
          connect: {
            id: selectedCandidacy?.id
          }
        },
        internship: {
          connect: {
            id: selectedInternship?.id
          }
        }
      }
    })
  }
}