import { type Visibility, type Team, type Person, type Leader, type Company } from '@prisma/client'
import { DBError } from '../errors/reference'
import { type UserWithType, type MembershipWithRelations, type ProjectsFull, type InternshipWithRelations } from '../types'

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

export function getInternshipStage(internship: InternshipWithRelations) {
  const { status, completed, hours } = internship

  let stage: Stage = status

  if (status === 'ACCEPTED') {
    if (completed >= hours) {
      stage = 'COMPLETED'
    }

    const recruitment = getAcceptedRecruitment(internship)

    if (recruitment !== undefined) {
      stage = 'ACTIVE'
    }
  }

  return stage
}

export function getAcceptedRecruitment(internship: InternshipWithRelations) {
  return internship.recruitments.find(recruitment => recruitment.status === 'ACCEPTED')
}

export function getInternshipCompany(internship: InternshipWithRelations) {
  const accepted = getAcceptedRecruitment(internship)

  if (accepted === undefined) return null

  return accepted.vacant.company
}
