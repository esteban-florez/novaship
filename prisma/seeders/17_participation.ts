import collect from '@/lib/utils/collection'
import prisma from '../client'

export default async function participation() {
  const tasks = await prisma.task.findMany({
    include: {
      project: {
        include: {
          team: {
            include: {
              memberships: true,
            },
          },
        },
      },
    },
  })

  const participationsData = tasks
    .filter(task => task.project.team !== null)
    .flatMap(task => {
      if (task.project.team === null) throw new Error()

      const { memberships } = task.project.team
      const membersLength = memberships.length
      const participantsCount = membersLength < 3 ? membersLength : 3
      const members = collect(memberships)

      return members.random(participantsCount).all().map(member => ({
        personId: member.personId,
        taskId: task.id,
      }))
    })

  await prisma.participation.createMany({ data: participationsData })
}
