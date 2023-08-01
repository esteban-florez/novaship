import { getRandomValueFromArray } from "@/lib/utils/array"
import prisma from "../client"
import data from '@/prisma/seeds-data.json'
import { seederQueries } from "../seed"
import { getRandomValueFromType } from "@/lib/utils/types"
import { TaskStatus } from "@prisma/client"
import { random } from "@/lib/utils/number"

const tasks = data.tasks

export default async function subtask() {
  const tasksCount = await prisma.task.count()

  for (let i = 1; i < seederQueries.tasks; i++) {
    const skip = random(1, tasksCount - 1)
    const selectedTask = await prisma.task.findFirst({ skip })

    await prisma.subtask.create({
      data: {
        title: getRandomValueFromArray(tasks.titles),
        description: getRandomValueFromArray(tasks.descriptions),
        status: getRandomValueFromType(TaskStatus),
        task: {
          connect: {
            id: selectedTask?.id
          }
        }
      },
    })
  }
}