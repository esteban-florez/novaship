import { type SelectableCategory, type OptionSkill } from '@/lib/types'
import { type Job } from '@prisma/client'
import { createContext } from 'react'
import { type Control, type FieldErrors, type RegisterOptions, type UseFormRegisterReturn } from 'react-hook-form'

interface SignUpContextType {
  register: (name: string, config?: RegisterOptions) => UseFormRegisterReturn
  errors: FieldErrors
  control: Control
  goNext: () => void
  goBack: () => void
  reset: () => void
  trigger: (fields?: string | string[]) => Promise<boolean>
  categories: SelectableCategory[]
  selectedCategories: SelectableCategory[]
  setCategories: (categories: SelectableCategory[]) => void
  skills: OptionSkill[]
  jobs: Job[]
  clearErrors: (name?: string | string[]) => void
  setValue: (name: string, value: unknown) => void
}

// @ts-expect-error -> Trust me TypeScript, this context will not be null.
export const SignUpContext = createContext<SignUpContextType>({})
