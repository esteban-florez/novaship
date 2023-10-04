import collect from '@/lib/utils/collection'
import prisma from '../client'
import numbers from '@/lib/utils/number'
import { Status } from '@prisma/client'

export default async function invitation() {
  const teams = await prisma.team.findMany({ select: { id: true } })
  const persons = collect(await prisma.person.findMany({ select: { id: true } }))
  const statuses = collect(Object.values(Status))
  const countRange = numbers(3, 20)

  const invitationsData = teams.flatMap(team => {
    const invitationCount = countRange.random()
    const status = statuses.random().first()
    const invitationsPerTeam = []

    for (let i = 0; i < invitationCount; i++) {
      invitationsPerTeam.push({
        personId: persons.random().first().id,
        teamId: team.id,
        status: i === 0 ? Status.ACCEPTED : status,
      })
    }

    return invitationsPerTeam
  })

  await prisma.invitation.createMany({ data: invitationsData })
}
