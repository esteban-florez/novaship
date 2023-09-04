import { type UseFormRegisterReturn, type FieldErrors, type RegisterOptions } from 'react-hook-form'
import { type ERRORS } from './errors/reference'
import {
  type Person, type Company, type Institute, type Field, type Skill,
  type Offer, type Location, type Project, type Task, type Participation,
  type Membership, type Subtask,
} from '@prisma/client'
import { type days } from './translations'

type Selectable<T> = T & {
  selected: boolean
}

type OptionSkill = Pick<Skill, 'id' | 'title'>
type OptionField = Pick<Field, 'id' | 'title'>
type OptionPerson = Pick<Person, 'id' | 'name' | 'email'>

type SelectableField = Selectable<OptionField>
type SelectableSkill = Selectable<OptionSkill>
type SelectablePerson = Selectable<OptionPerson>
type SelectableOption = OptionField | OptionSkill | OptionPerson

type Colors = 'PRIMARY' | 'SECONDARY' | 'ACCENT' | 'CANCEL' | 'EMPTY' | 'ERROR' | 'WHITE' | 'GHOST'
type Styles = 'DEFAULT' | 'OUTLINE' | 'ICON' | 'TAB' | 'DISABLED'

type VisibilityFilter = 'PRIVATE' | 'PUBLIC' | 'ALL'

interface Offers extends Offer {
  company: Company
  location: Location
  fields: Field[]
}

interface Projects extends Project {
  company: Company | null
  person: Person | null
  fields: Field[]
  memberships: Array<Membership & {
    person: Person
  }>
  tasks: Array<Task & {
    subtasks: Subtask[]
    participations: Participation[]
  }>
}

type SharedInputProps = {
  label?: string
  className?: string
  value?: string
} & UseInputProps

interface UseInputProps {
  name: string
  register?: (name, config?: RegisterOptions) => UseFormRegisterReturn
  config?: RegisterOptions
  errors?: FieldErrors
}

type UseSubmitResult = null | 'loading' | ApiResponseBody

type TabProp = 'All' | 'Mine'
type TeamGroupTab = 'members' | 'add'
type ProjectDetailsTab = 'Files' | 'Tasks'
type OffersTab = 'All' | 'Mine' | 'Applied'

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

type OffersWithRelationships = Offer & {
  company: Company
  location: Location
  fields: Field[]
}

type UserWithType = (Person & { type: 'PERSON' })
| (Company & { type: 'COMPANY' })
| (Institute & { type: 'INSTITUTE' })
