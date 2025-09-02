import collect from '@/lib/utils/collection'
import prisma from '../client'

export default async function participation() {
  const subtasks = await prisma.subtask.findMany({
    where: {
      task: {
        project: {
          teamId: { not: null },
          team: {
            memberships: {
              some: {
                personId: { not: undefined },
              },
            },
          },
        },
      },
    },
    include: {
      task: {
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
      },
    },
  })

  const participationsData = subtasks.flatMap(subtask => {
    const memberships = subtask.task.project.team?.memberships
    if (memberships != null) {
      const membersLength = memberships.length
      const participantsCount = membersLength < 3 ? membersLength : 3
      const members = collect(memberships)

      return members.random(participantsCount).all().map(member => ({
        personId: member.personId,
        subtaskId: subtask.id,
      }))
    } else {
      return []
    }
  })

  await prisma.subparticipation.createMany({ data: participationsData })
}
