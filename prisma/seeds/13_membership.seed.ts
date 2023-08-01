import prisma from "../client"
import { seederQueries } from "../seed"
import { random } from "@/lib/utils/number"

export default async function membership() {
  const projectsCount = await prisma.project.count()
  const personsCount = await prisma.person.count()

  for (let i = 1; i <= seederQueries.memberships; i++) {
    const skipProjects = random(1, projectsCount - 1)
    const skipPersons = random(1, personsCount - 1)
    const selectedProject = await prisma.project.findFirst({ skip: skipProjects })
    const selectedPerson = await prisma.person.findFirst({ skip: skipPersons })
  
    await prisma.membership.create({
      data: {
        project: {
          connect: {
            id: selectedProject?.id
          }
        },
        person: {
          connect: {
            id: selectedPerson?.id
          }
        },
      }
    })
  }
}