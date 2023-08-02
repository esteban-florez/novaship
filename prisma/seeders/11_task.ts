import prisma from '../client'
import data from '@/prisma/data/tasks.json'
import dataProjects from '@/prisma/data/projects.json'
import { seederQueries } from '../seed'
import types from '@/lib/utils/types'
import { TaskStatus } from '@prisma/client'
import collect from '@/lib/utils/collection'

const tasks = data
const projects = dataProjects

export default async function task() {
  for (let i = 1; i < seederQueries.tasks; i++) {
    await prisma.task.create({
      data: {
        title: collect(tasks.titles).random().first(),
        description: collect(tasks.descriptions).random().first(),
        status: types(TaskStatus).random(),
        project: {
          connect: {
            title: collect(projects.titles).random().first(),
          },
        },
      },
    })
  }
}
