import { getRandomValueFromArray } from "@/lib/utils/array"
import prisma from "../client"
import data from '@/prisma/seeds-data.json'
import { seederQueries } from "../seed"
import { getRandomValueFromType } from "@/lib/utils/types"
import { TaskStatus } from "@prisma/client"

const tasks = data.tasks

export default async function task() {
  for (let i = 1; i < seederQueries.tasks; i++) {
    await prisma.task.create({
      data: {
        title: getRandomValueFromArray(tasks.titles),
        description: getRandomValueFromArray(tasks.descriptions),
        status: getRandomValueFromType(TaskStatus),
        project: {
          connect: {
            title: getRandomValueFromArray(data.projects.titles)
          }
        }
      },
    })
  }
}