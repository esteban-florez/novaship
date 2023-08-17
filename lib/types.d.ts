import { type FieldErrors, type RegisterOptions } from 'react-hook-form'
import { type ERRORS } from './errors/reference'
import { type Field, type Skill } from '@prisma/client'

type SkillOption = Pick<Skill, 'id' | 'title'>
type FieldOption = Pick<Field, 'id' | 'title'>
type PersonOption = Pick<Person, 'id' | 'name' | 'email'>
type OfferOption = Pick<Offer, 'id' | 'title'>

type SkillSelectable = SkillOption & { selected: boolean }
type FieldSelectable = FieldOption & { selected: boolean }
type PersonSelectable = PersonOption & { selected: boolean }
type OfferSelectable = OfferOption & { selected: boolean }

type SelectableOption = FieldOption | SkillOption | PersonOption | OfferOption

type Selectable<T> = T & {
  selected: boolean
}

type SelectableField = Selectable<Pick<Field, 'id' | 'title'>>
type SelectableSkill = Selectable<Pick<Skill, 'id' | 'title'>>
type SelectablePerson = Selectable<Pick<Person, 'id' | 'name' | 'email'>>

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
