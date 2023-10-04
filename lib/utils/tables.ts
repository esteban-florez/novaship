import { type Visibility, type Team, type Project, type Person, type Leader, type Company } from '@prisma/client'
import { DBError } from '../errors/reference'
import { type UserWithType, type MembershipWithRelations } from '../types'

export function getMember(membership: MembershipWithRelations) {
  const member = membership.person

  if (member === null) {
    throw new DBError('DBError: Invalid membership without Person and Company.')
  }

  return member
}

type ProjectWithRelations = Project & {
  person: Person | null
  team: TeamWithRelations | null
}

export function getProjectLeader(project: ProjectWithRelations): UserWithType {
  const { person, team } = project

  if (person !== null) {
    return { ...person, type: 'PERSON' }
  }

  if (team !== null) {
    return getTeamLeader(team)
  }

  throw new DBError('DBError: Invalid Project without leader.')
}

type TeamWithRelations = Team & {
  leader: Leader & {
    person: Person | null
    company: Company | null
  }
}

export function getTeamLeader(team: TeamWithRelations): UserWithType {
  if (team !== null) {
    const { leader: { person, company } } = team
    if (person !== null) {
      return { ...person, type: 'PERSON' }
    } else if (company !== null) {
      return { ...company, type: 'COMPANY' }
    }
  }

  throw new DBError('DBError: Invalid Team without leader.')
}

export function getPublicProjects<T>(projects: Array<T & {
  visibility: Visibility
}>) {
  return projects.filter(project => project.visibility === 'PUBLIC')
}
