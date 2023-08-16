import { type FieldErrors, type RegisterOptions } from 'react-hook-form'
import { type ERRORS } from './errors/reference'
import { type Field, type Skill } from '@prisma/client'

type Selectable<T> = T & {
  selected: boolean
}

type SelectableField = Selectable<Pick<Field, 'id' | 'title'>>
type SelectableSkill = Selectable<Pick<Skill, 'id' | 'title'>>
type SelectablePerson = Selectable<Pick<Person, 'id' | 'name' | 'email'>>

type Colors = 'PRIMARY' | 'SECONDARY' | 'ACCENT' | 'CANCEL' | 'EMPTY' | 'ERROR' | 'WHITE' | 'GHOST'
type Styles = 'DEFAULT' | 'OUTLINE' | 'ICON' | 'TAB' | 'DISABLED'

type VisibilityFilter = 'PRIVATE' | 'PUBLIC' | 'ALL'

interface SharedInputProps {
  name: string
  label?: string
  className?: string
  value?: string
  register?: (name, config?: RegisterOptions) => object
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
