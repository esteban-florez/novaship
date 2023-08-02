import { type Skill } from '@prisma/client'
import { type RegisterOptions } from 'react-hook-form'

export type SkillOption = Pick<Skill, 'id' | 'title'> & { selected: boolean }

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
