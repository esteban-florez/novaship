import { type Visibility, type Team, type Person, type Leader, type Company, type Internship, type Status } from '@prisma/client'
import { DBError } from '../errors/reference'
import { type UserWithType, type MembershipWithRelations, type ProjectsFull } from '../types'

export function getMember(membership: MembershipWithRelations) {
  const member = membership.person

  if (member === null) {
    throw new DBError('DBError: Invalid membership without Person and Company.')
  }

  return member
}

export function getProjectLeader(project: ProjectsFull): UserWithType {
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

interface WithStatus {
  status: Status
}

interface WithRecruitments {
  recruitments: WithStatus[]
}

export function getInternshipStage(internship: Internship & WithRecruitments) {
  const { status, completed, hours } = internship

  let statusKey: Stage = status

  if (status === 'ACCEPTED') {
    if (completed >= hours) {
      statusKey = 'COMPLETED'
    }

    const recruitment = getAcceptedRecruitment(internship)

    if (recruitment !== undefined) {
      statusKey = 'ACTIVE'
    }
  }

  return statusKey
}

export function getAcceptedRecruitment<T>(internship: T & WithRecruitments) {
  return internship.recruitments.find(recruitment => recruitment.status === 'ACCEPTED')
}
