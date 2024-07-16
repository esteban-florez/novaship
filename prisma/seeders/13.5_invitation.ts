import collect from '@/lib/utils/collection'
import prisma from '../client'
import numbers from '@/lib/utils/number'
import { Interested, type Invitation, Status } from '@prisma/client'

export default async function invitation() {
  const teams = await prisma.team.findMany({ select: { id: true } })
  const persons = collect(
    await prisma.person.findMany({ select: { id: true } })
  )
  const statuses = collect(Object.values(Status))
  const countRange = numbers(3, 20)

  const invitationsData = teams.flatMap((team) => {
    const invitationCount = countRange.random()
    const status = statuses.random().first()
    const invitationsPerTeam: Array<
    Pick<Invitation, 'interested' | 'personId' | 'status' | 'teamId'>
    > = []

    const usedPersonIds = new Set<string>()

    for (let i = 0; i < invitationCount; i++) {
      const interested = collect(Object.values(Interested)).random().first()
      const personId = persons.random().first().id

      while (!usedPersonIds.has(personId)) {
        usedPersonIds.add(personId)
        invitationsPerTeam.push({
          personId,
          teamId: team.id,
          status: i === 0 ? Status.ACCEPTED : status,
          interested,
        })
      }
    }

    return invitationsPerTeam
  })

  await prisma.invitation.createMany({
    data: invitationsData,
  })
}
