import { type UseFormRegisterReturn, type FieldErrors, type RegisterOptions } from 'react-hook-form'
import { type ERRORS } from './errors/reference'
import {
  type Person, type Company, type Institute, type Category, type Skill,
  type Offer, type Location, type Project, type Task, type Participation,
  type Membership, type Subtask, type Team, type File, type Admin, type Revision, type Recruitment, type Vacant, type Grade, type Internship,
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

type Colors = 'PRIMARY' | 'SECONDARY' | 'ACCENT' | 'CANCEL' | 'EMPTY' | 'ERROR' | 'WHITE' | 'NEUTRAL'
type Styles = 'DEFAULT' | 'OUTLINE' | 'ICON' | 'TAB' | 'DISABLED'

// ----------------------------------------------------------------------
// --------------------------- Internships ------------------------------
// ----------------------------------------------------------------------

type InternshipWithRelations = Internship & {
  recruitments: Array<Recruitment & {
    vacant: Vacant
  }>
  categories: Category[]
  institute: Institute
  person: Person
  grade: Grade
}

// ----------------------------------------------------------------------
// --------------------------- Offers ---------------------------------
// ----------------------------------------------------------------------
type SuggestedOffersWithRelationships = Array<Offer & {
  company: {
    id: string
    name: string
  }
  location: {
    title: string
  }
  job: {
    id: string
    title: string
  }
  categories: Array<{
    id: string
    title: string
  }>
  skills: Array<{
    id: string
    title: string
  }>
}>
interface Offers extends Offer {
  company: Company
  location: Location
  categories: Category[]
}

type OffersWithRelationships = Offer & {
  company: Company
  location: Location
  categories: Category[]
}

// ----------------------------------------------------------------------
// --------------------------- Memberships ---------------------------------
// ----------------------------------------------------------------------

type MembershipWithRelations = Membership & {
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

type ProjectTeam = Team & {
  memberships: Array<Membership & {
    person: {
      id: string
      name: string
    } | null
    company: {
      id: string
      name: string
    } | null
  }>
}

interface ProjectsFull extends Project {
  person: Person | null
  team: (Team & {
    leader: Leader & {
      person: Person
      company: Company
    }
    memberships: Array<Membership & {
      person: Person
    }>
  }) | null
  categories: Category[]
}
interface ProjectWithTeamAndCategories {
  id: string
  person: {
    id: string
    name: string
  } | null
  team: {
    id: string
    memberships: Array<{
      id: string
      person: {
        id: string
        name: string
      }
    }>
    name: string
  } | null
  categories: Array<{
    id: string
    title: string
  }>
  description: string
}

interface ProjectsWithTeamCategoriesTaskAndSubtask extends Project {
  team: Team & {
    memberships: Array<{
      person: {
        id: string
        name: string
      } | null
    }>
  }
  categories: Array<{
    id: string
    title: string
  }>
  tasks: Array<Task & {
    subtasks: Subtask[]
    participations: Participation[]
  }>
}

interface ProjectsWithTeamAndMessages extends Project {
  team: Team & {
    memberships: Array<Membership & {
      person: {
        id: string
        name: string
      } | null
      company: {
        id: string
        name: string
      } | null
      messages: Message[]
    }>
  }
}

interface Projects extends Project {
  team: Team & {
    memberships: Array<Membership & {
      person: Person | null
    }>
  }
  categories: Category[]
  files: Array<File & {
    membership: Membership & {
      participations: Participation[]
    }
  }>
  tasks: Array<Task & {
    subtasks: Subtask[]
    participations: Participation[]
  }>
}

interface TasksProps {
  projectId: string
  tasks: Array<Task & {
    subtasks: Array<Subtask & {
      revisions: Revision[]
    }>
    participations: Participation[]
    revisions: Revision[]
  }>
}

interface TaskProps {
  projectId: string
  task: Task & {
    subtasks: Array<Subtask & {
      revisions: Revision[]
    }>
    participations: Participation[]
    revisions: Revision[]
  }
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

type UserWithType = (Person & { type: 'PERSON' })
| (Company & { type: 'COMPANY' })
| (Institute & { type: 'INSTITUTE' })
| (Admin & { type: 'ADMIN' })
