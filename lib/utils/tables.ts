import { type Team } from '@prisma/client'
import { DBError } from '../errors/reference'
import { type MembershipWithRelations } from '../types'

export function getMember(membership: MembershipWithRelations) {
  const member = membership.company ?? membership.person

  if (member === null) {
    throw new DBError('DBError: Invalid membership without Person and Company.')
  }

  return member
}

type TeamWithMemberships = Team & {
  memberships: MembershipWithRelations[]
}

export function getTeamLeader(team: TeamWithMemberships) {
  const leader = team.memberships.find(membership => membership.isLeader)

  if (leader === undefined) {
    throw new DBError('DBError: Invalid Team without leader.')
  }

  return leader
}
