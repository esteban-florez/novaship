import { type UseFormRegisterReturn, type FieldErrors, type RegisterOptions } from 'react-hook-form'
import { type ERRORS } from './errors/reference'
import {
  type Person,
  type Company,
  type Institute,
  type Category,
  type Skill,
  type Offer,
  type Location,
  type Project,
  type Task,
  type Participation,
  type Membership,
  type Subtask,
  type Team,
  type File,
  type Admin,
  type Revision,
  type Job,
  type Hiring,
  type Leader,
  type Contract,
  type Invitation,
  type Vacant,
  type Recruitment,
  type Grade,
  type Internship,
  type Progress,
  type Subparticipation,
  type Interested,
} from '@prisma/client'
import { type Model } from './data-fetching/log'

type Selectable<T> = T & {
  selected: boolean
}

type OptionSkill = Pick<Skill, 'id' | 'title'>
type OptionCategory = Pick<Category, 'id' | 'title'>
type OptionLocation = Pick<Location, 'id' | 'title'>
type OptionJob = Pick<Job, 'id' | 'title'>
type OptionPerson = Pick<Person, 'id' | 'name' | 'email'>
type OptionCompany = Pick<Company, 'id' | 'name'>
type OptionTeam = Pick<Team, 'id' | 'name'>

type SelectableCategory = Selectable<OptionCategory>
type SelectableSkill = Selectable<OptionSkill>
type SelectablePerson = Selectable<OptionPerson>
type SelectableOption = OptionCategory | OptionSkill | OptionPerson

interface ModelData {
  id: string
  title: string
}

// ----------------------------------------------------------------------
// --------------------------- Aside ------------------------------
// ----------------------------------------------------------------------
interface SidebarLink {
  href: string
  title: string
  icon: JSX.Element
  visible?: boolean
  model: Model
}

type SidebarLinkWithSubmenu = SidebarLink & {
  submenu?: Array<SidebarLink & {
    model: Model
  }>
}

// ----------------------------------------------------------------------
// --------------------------- Home ------------------------------
// ----------------------------------------------------------------------
interface QuickAccessProps {
  icon: React.ReactElement
  title: string
  href: string
}

interface NotificationProps {
  id: string
  title: string
  content: React.ReactNode
  href: string
  date: Date
}

// ----------------------------------------------------------------------
// --------------------------- Internships ------------------------------
// ----------------------------------------------------------------------

interface InternshipSimple {
  hours: number
  recruitments: Array<{
    status: Status
    progresses: Array<{
      hours: number
    }>
  }>
  updatedAt: Date
}

type InternshipWithRelations = Internship & {
  recruitments: Array<
  Recruitment & {
    vacant: Vacant & {
      company: Company & {
        location: Location
      }
    }
    progresses: Progress[]
  }
  >
  categories: Category[]
  institute: Institute
  person: Person & {
    location: Location
  }
  grade: Grade
}

type VacantWithRelations = Vacant & {
  categories: Category[]
  grades: Grade[]
  skills: Skill[]
  company: Company
  location: Location
  recruitments: Recruitment[]
  job: Job
}

type RecruitmentWithRelations = Recruitment & {
  vacant: Vacant & {
    company: Company
    job: Job
  }
  internship: Internship & {
    person: Person
    grade: Grade
  }
  progresses: Progress[]
}

// ----------------------------------------------------------------------
// ------------------------------ Teams ---------------------------------
// ----------------------------------------------------------------------
interface TeamsFull extends Team {
  categories: Category[]
  leader: Leader & {
    person: Person
    company: Company
  }
  projects: Array<
  Project & {
    categories: Category[]
  }
  >
  contracts: Contract[]
  invitations: Invitation[]
  memberships: Array<
  Membership & {
    person: Person & {
      grades: Grade[]
      location: Location
    }
  }
  >
}

type InvitationSimple = Pick<Invitation & {
  person: Pick<Person, 'id' | 'name'>
}, 'id' | 'status' | 'interested' | 'person'>

interface InvitationData {
  id: string
  status: Status
  updatedAt: Date
  interested: Interested
  person: {
    id: string
    name: string
  }
  team: {
    id: string
    name: string
  }
}

// ----------------------------------------------------------------------
// --------------------------- Offers ---------------------------------
// ----------------------------------------------------------------------
interface OffersFull extends Offer {
  company: Company
  location: Location
  categories: Category[]
  job: Job
  skills: Skill[]
  hiring: Hiring[]
}

interface HiringWithPersonSkills {
  id: string
  personId: string
  status: Status
  interested: Interested
  person: {
    name: string
    skills: Array<{
      id: string
      title: string
    }>
  }
}

// ----------------------------------------------------------------------
// --------------------------- Memberships ---------------------------------
// ----------------------------------------------------------------------

interface MembershipsFull extends Membership {
  person: Person | null
}

// ----------------------------------------------------------------------
// --------------------------- Projects ---------------------------------
// ----------------------------------------------------------------------
interface Permissions {
  delete: boolean
  create: boolean
  edit: boolean
  comment: boolean
}

type RevisionComponentProps = Revision & {
  task:
  | (Task & {
    person: Person
  })
  | null
  subtask:
  | (Subtask & {
    task: Task & {
      person: Person
    }
  })
  | null
}

type RevisionWithRelationsip = Revision & {
  task: TasksWithRelationship
  subtask: SubtaskWithRelationShip
}

type SubtasksWithRelation = Subtask & {
  task: Task & {
    project: Project
    person: Person
  }
  revisions: Revision[]
  subparticipations: Array<
  Subparticipation & {
    person: Person
  }
  >
}

type SubtaskWithRelationShip = Subtask & {
  task: TasksWithRelationship
  revisions: Revision[]
  subparticipations: Array<
  Subparticipation & {
    person: Person
  }
  >
}

type TasksWithRelationship = Task & {
  person: Peron
  subtasks: Array<
  Subtask & {
    revisions: Revision[]
    subparticipations: Array<
    Subparticipation & {
      person: Person
    }
    >
  }
  >
  revisions: Revision[]
  participations: Array<
  Participation & {
    person: Person
  }
  >
}

type ProjectMembership = Membership & {
  person: {
    id: string
    name: string
  } | null
}

interface ProjectsFull extends Project {
  person: Person | null
  team:
  | (Team & {
    leader: Leader & {
      person: Person | null
      company: Company | null
    }
    memberships: Array<
    Membership & {
      person: Person
    }
    >
  })
  | null
  categories: Category[]
  tasks: Array<
  Task & {
    subtasks: Array<
    Subtask & {
      revisions: Revision[]
    }
    >
    revisions: Revision[]
    participations: Participation[]
  }
  >
  files: File[]
}

type SharedInputProps = {
  label?: string
  className?: string
  labelClassName?: string
  value?: string
} & UseInputProps

interface UseInputProps {
  name: string
  register?: (name, config?: RegisterOptions) => UseFormRegisterReturn
  config?: RegisterOptions
  errors?: FieldErrors
}

type UseSubmitResult = null | 'loading' | ApiResponseBody

// ----------------------------------------------------------------------
// --------------------------- Tabs ---------------------------------
// ----------------------------------------------------------------------

type TabProp = 'All' | 'Mine'
type TeamGroupTab = 'members' | 'add'
type ProjectDetailsTab = 'Files' | 'Tasks'
type InvitationsTab = 'pending' | 'accepted' | 'rejected'

// ----------------------------------------------------------------------
// --------------------------- API ---------------------------------
// ----------------------------------------------------------------------
interface ApiResponseBody {
  errorType?: keyof typeof ERRORS
  errors?: {
    [x: string]: string[] | undefined
    [x: number]: string[] | undefined
    [x: symbol]: string[] | undefined
  }
  data?: Record<string, unknown>
}

type UserWithType =
  | (Person & { type: 'PERSON' })
  | (Company & { type: 'COMPANY' })
  | (Institute & { type: 'INSTITUTE' })
  | (Admin & { type: 'ADMIN' })

interface NotificationData {
  title: string
  content: string
  href: string
}

type NotificationsRecord = Record<string, undefined | ((data: Rec) => NotificationData)>
