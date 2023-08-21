import { type UseFormRegisterReturn, type FieldErrors, type RegisterOptions } from 'react-hook-form'
import { type ERRORS } from './errors/reference'
import { type Field, type Skill } from '@prisma/client'
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
