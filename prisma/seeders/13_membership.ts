import prisma from '../client'
import { seederQueries } from '../seed'
import numbers from '@/lib/utils/number'

export default async function membership() {
  const projectsCount = await prisma.project.count()
  const personsCount = await prisma.person.count()

  for (let i = 1; i <= seederQueries.memberships; i++) {
    const skipProjects = numbers(1, projectsCount - 1).randomBetween()
    const skipPersons = numbers(1, personsCount - 1).randomBetween()
    const selectedProject = await prisma.project.findFirst({ skip: skipProjects })
    const selectedPerson = await prisma.person.findFirst({ skip: skipPersons })

    await prisma.membership.create({
      data: {
        project: {
          connect: {
            id: selectedProject?.id,
          },
        },
        person: {
          connect: {
            id: selectedPerson?.id,
          },
        },
      },
    })
  }
}
