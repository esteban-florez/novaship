import {
  type Visibility,
  type Team,
  type Person,
  type Leader,
  type Company,
  type Membership,
  type Resets,
  type AuthUser,
  type Admin,
  type Institute,
  type Status,
  type Interested,
  type TaskStatus,
} from '@prisma/client'
import { DBError } from '../errors/reference'
import {
  type UserWithType,
  type ProjectsFull,
  type InternshipWithRelations,
  type MembershipsFull,
  type VacantWithRelations,
  type HiringWithPersonSkills,
  type TasksWithRelationship,
} from '../types'

type TeamWithRelations = Team & {
  leader: Leader & {
    person: Person | null
    company: Company | null
  }
}

type TeamWithMembers =
  | (Team & {
    leader: Leader & {
      person: Person | null
      company: Company | null
    }
    memberships: Array<
    Membership & {
      person: Person | null
    }
    >
  })
  | null

export function getHiringData(hirings: HiringWithPersonSkills[], id: string) {
  const status = getHiringStatusFromId(hirings, id)
  const hasApplied = hirings.some((hiring) => hiring.personId === id)
  const interested: Interested = hirings.find((hiring) => hiring.personId === id)?.interested as Interested
  const hiringId = hirings.find((hiring) => hiring.personId === id)?.id ?? ''
  return { status, hasApplied, interested, hiringId }
}

export function getHiringStatusFromId(hirings: HiringWithPersonSkills[], id: string): Status {
  return hirings.find((hiring) => hiring.personId === id)?.status ?? 'PENDING'
}

export function getTeamwork(project: ProjectsFull) {
  return project.teamId != null ? 'team' : 'solo'
}

export function belongsToTeam(team: TeamWithMembers, userId: string): boolean {
  if (team !== null) {
    return team.memberships.find((member) => member.person?.id === userId) != null
  }

  return false
}

export function getMember(membership: MembershipsFull) {
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

interface TeamSimple extends Team {
  leader: {
    person: Person | null
    company: Company | null
  }
}

export function getTeamLeader(team: TeamWithRelations | TeamSimple): UserWithType {
  if (team !== null) {
    const {
      leader: { person, company },
    } = team
    if (person !== null) {
      return { ...person, type: 'PERSON' }
    } else if (company !== null) {
      return { ...company, type: 'COMPANY' }
    }
  }

  throw new DBError('DBError: Invalid Team without leader.')
}

export function getPublicProjects<T>(
  projects: Array<
  T & {
    visibility: Visibility
  }
  >
) {
  return projects.filter((project) => project.visibility === 'PUBLIC')
}

export function getInternshipStage(internship: InternshipWithRelations): Stage {
  const { status, hours } = internship
  const completed = getCompletedHours(internship)

  if (status !== 'ACCEPTED') {
    return status
  }

  if (completed >= hours) {
    return 'COMPLETED'
  }

  const recruitment = getAcceptedRecruitment(internship)

  if (recruitment !== undefined) {
    return 'ACTIVE'
  }

  return 'ACCEPTED'
}

export function getAcceptedRecruitment(internship: InternshipWithRelations) {
  return internship.recruitments.find((recruitment) => recruitment.status === 'ACCEPTED')
}

export function getInternshipCompany(internship: InternshipWithRelations) {
  const accepted = getAcceptedRecruitment(internship)

  if (accepted === undefined) return null

  return accepted.vacant.company
}

interface ResetWithRelations extends Resets {
  authUser: AuthUser & {
    person: Person | null
    company: Company | null
    institute: Institute | null
    admin: Admin | null
  }
}

export function getResetEmail(reset: ResetWithRelations) {
  const { person, company, admin, institute } = reset.authUser
  const email = person?.email ?? company?.email ?? admin?.email ?? institute?.email
  if (email === undefined) {
    throw new Error('error: WATAFAAAK')
  }
  return email
}

type DateAndDuration = Pick<VacantWithRelations, 'createdAt' | 'duration'>
type Limitable = Pick<VacantWithRelations, 'recruitments' | 'limit'>
type WithRecruitments = Pick<VacantWithRelations, 'recruitments'>

export function vacantIsFull(vacant: Limitable) {
  const { length } = getAcceptedRecruitments(vacant)
  return length >= vacant.limit
}

export function vacantIsExpired(vacant: DateAndDuration) {
  return Date.now() >= Number(getVacantExpiration(vacant))
}

export function getVacantExpiration(vacant: DateAndDuration) {
  const createdAt = Number(vacant.createdAt)
  const duration = vacant.duration * 24 * 60 * 60 * 1000
  return new Date(createdAt + duration)
}

export function getAcceptedRecruitments(vacant: WithRecruitments) {
  return vacant.recruitments.filter(({ status }) => status === 'ACCEPTED')
}

export function validVacants(vacants: VacantWithRelations[]) {
  return vacants.filter((vacant) => {
    return !vacantIsExpired(vacant) && !vacantIsFull(vacant)
  })
}

interface WithProgress {
  progresses: Array<{
    hours: number
    status: Status
  }>
}

interface WithHours {
  recruitments: Array<
  WithProgress & {
    status: Status
  }
  >
}

export function getCompletedHours(internship: WithHours) {
  const recruitment = internship.recruitments.find((recruitment) => recruitment.status === 'ACCEPTED')

  if (recruitment === undefined) {
    return 0
  }

  return recruitmentCompletedHours(recruitment)
}

export function recruitmentCompletedHours(recruitment: WithProgress) {
  return recruitment.progresses
    .filter((progress) => progress.status === 'ACCEPTED')
    .reduce((sum, progress) => sum + progress.hours, 0)
}

export function getRemainingHours(internship: InternshipWithRelations) {
  return internship.hours - getCompletedHours(internship)
}

export function getTaskStatus(task: TasksWithRelationship) {
  if (task.status != null) return task.status.toUpperCase()

  interface Statuses {
    pending: number
    done: number
    review: number
    progress: number
  }
  const status = { pending: 0, done: 0, review: 0, progress: 0 }
  task.subtasks.forEach((s) => {
    if (s.status === 'DONE') status.done += 1
    if (s.status === 'PENDING') status.pending += 1
    if (s.status === 'REVIEW') status.review += 1
    if (s.status === 'PROGRESS') status.progress += 1
  })

  const higherValue = Object.keys(status).reduce((a, b) =>
    status[a as keyof Statuses] > status[b as keyof Statuses] ? a : b
  )

  return higherValue.toUpperCase() as TaskStatus
}

export function getTasksStatuses(tasks: TasksWithRelationship[]) {
  interface Statuses {
    pending: TasksWithRelationship[]
    done: TasksWithRelationship[]
    review: TasksWithRelationship[]
    progress: TasksWithRelationship[]
  }
  const filters: Statuses = { pending: [], done: [], review: [], progress: [] }

  tasks.forEach((t) => {
    const status = (getTaskStatus(t) as TaskStatus).toLowerCase()

    filters[status as keyof Statuses].push(t)
  })

  return filters
}

export function getProjectResponsable(project: ProjectsFull, userId: string) {
  let responsable = ''

  if (project.team != null) {
    const leader = getTeamLeader(project.team)
    const member = belongsToTeam(project.team, userId)

    if (member) {
      responsable = 'Miembro de equipo'
      return responsable
    }

    project.personId === userId || leader.id === userId
      ? (responsable = 'Líder de equipo')
      : (responsable = leader.name)
  }

  if (project.person != null && project.personId !== userId) { responsable = project.person.name }

  return responsable
}
