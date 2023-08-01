import { getRandomValueFromArray } from "@/lib/utils/array"
import prisma from "../client"
import { seederQueries } from "../seed"
import { random } from "@/lib/utils/number"
import data from '@/prisma/seeds-data.json'

const revisions = data.revisions

export default async function revision() {
  const tasksCount = await prisma.task.count()

  for (let i = 1; i <= seederQueries.revisions; i++) {
    const skip = random(1, tasksCount - 1)
    const selectedTask = await prisma.task.findFirst({ skip })
  
    await prisma.revision.create({
      data: {
        task: {
          connect: {
            id: selectedTask?.id
          }
        },
        description: getRandomValueFromArray(revisions),
      }
    })
  }
}