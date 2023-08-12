import { type Field, type Skill } from '@prisma/client'
import { type FieldErrors, type RegisterOptions } from 'react-hook-form'
import { type ERRORS } from './errors/reference'

type SkillOption = Pick<Skill, 'id' | 'title'> & { selected: boolean }
type FieldOption = Pick<Field, 'id' | 'title'> & { selected: boolean }
type PersonOption = Pick<Person, 'id' | 'name' | 'email'> & { selected: boolean }

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

type InputOnChange = React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>

type TabProp = 'All' | 'Mine'

interface ApiResponseBody {
  errorType?: keyof typeof ERRORS
  errors?: {
    [x: string]: string[] | undefined
    [x: number]: string[] | undefined
    [x: symbol]: string[] | undefined
  }
  data?: Record<string, unknown>
}
