import {
  type UseFormRegisterReturn,
  type FieldErrors,
  type RegisterOptions,
} from 'react-hook-form'
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
} from '@prisma/client'
import { type days } from './translations'

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

type Colors =
  | 'PRIMARY'
  | 'SECONDARY'
  | 'ACCENT'
  | 'CANCEL'
  | 'EMPTY'
  | 'ERROR'
  | 'WHITE'
  | 'NEUTRAL'
type Styles = 'DEFAULT' | 'OUTLINE' | 'ICON' | 'TAB' | 'DISABLED'

// ----------------------------------------------------------------------
// --------------------------- Internships ------------------------------
// ----------------------------------------------------------------------

type InternshipWithRelations = Internship & {
  recruitments: Array<Recruitment & {
    vacant: Vacant & {
      company: Company
    }
  }>
  categories: Category[]
  institute: Institute
  person: Person
  grade: Grade
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
  projects: Array<Project & {
    categories: Category[]
  }>
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

// ----------------------------------------------------------------------
// --------------------------- Memberships ---------------------------------
// ----------------------------------------------------------------------

interface MembershipsFull extends Membership {
  person: Person | null
}

// ----------------------------------------------------------------------
// --------------------------- Projects ---------------------------------
// ----------------------------------------------------------------------
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
type OffersTab = 'all' | 'personal' | 'applied' | 'suggested'
type TeamsTab = 'all' | 'personal'
type ProjectsTab = 'all' | 'suggested' | 'personal'

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

type Schedule = Record<keyof typeof days, number[]>

type UserWithType =
  | (Person & { type: 'PERSON' })
  | (Company & { type: 'COMPANY' })
  | (Institute & { type: 'INSTITUTE' })
  | (Admin & { type: 'ADMIN' })
