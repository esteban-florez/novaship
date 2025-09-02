import prisma from '../client'

export default async function membership() {
  const invitations = await prisma.invitation.findMany({
    where: {
      status: 'ACCEPTED',
    },
  })

  const membershipsData = invitations.map(invitation => {
    return {
      invitationId: invitation.id,
      teamId: invitation.teamId,
      personId: invitation.personId,
    }
  })

  await prisma.membership.createMany({ data: membershipsData })
}
