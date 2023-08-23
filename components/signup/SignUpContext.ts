import { type OptionSkill, type SelectableField } from '@/lib/types'
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
  fields: SelectableField[]
  selectedFields: SelectableField[]
  setFields: (fields: SelectableField[]) => void
  skills: OptionSkill[]
  clearErrors: (name?: string | string[]) => void
}

// @ts-expect-error -> Trust me TypeScript, this context will not be null.
export const SignUpContext = createContext<SignUpContextType>({})
