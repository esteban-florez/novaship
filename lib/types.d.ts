import { type Skill } from '@prisma/client'
import { type RegisterOptions } from 'react-hook-form'
import { type ERRORS } from './errors/reference'

export type SkillOption = Pick<Skill, 'id' | 'title'> & { selected: boolean }
export type FieldOption = Pick<Fields, 'id' | 'title'> & { selected: boolean }

interface SharedInputProps {
  name: string
  label: string
  classes?: string
  value?: string
  register?: (name, config?: RegisterOptions) => object
  config?: RegisterOptions
  errors?: Record<string, {
    message?: string
  }>
}

type UseSubmitResult = null | 'loading' | ApiResponseBody

interface ApiResponseBody {
  errorType?: keyof typeof ERRORS
  errors?: {
    [x: string]: string[] | undefined
    [x: number]: string[] | undefined
    [x: symbol]: string[] | undefined
  }
  data?: Record<string, unknown>
}
