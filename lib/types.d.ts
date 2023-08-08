import { type Field, type Skill } from '@prisma/client'
import { type RegisterOptions } from 'react-hook-form'
import { type ZodIssue } from 'zod'
import { type ERRORS } from './errors/reference'

export type SkillOption = Pick<Skill, 'id' | 'title'> & { selected: boolean }
export type FieldOption = Pick<Field, 'id' | 'title'> & { selected: boolean }
export type PersonOption = Pick<Person, 'id' | 'name' | 'email'> & { selected: boolean }

interface SharedInputProps {
  name: string
  label?: string
  className?: string
  value?: string
  register?: (name, config?: RegisterOptions) => object
  config?: RegisterOptions
  errors?: Record<string, {
    message?: string
  }>
}

export type InputOnChange = React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>
export type TabProp = 'All' | 'Mine'

type UseSubmitResult = null | 'loading' | {
  body: ApiResponseBody
}

interface ApiResponseBody {
  errorType?: keyof typeof ERRORS
  errors?: ZodIssue[]
}
