import { literal, object } from 'zod'
import { base } from './shared'

export const schema = base.merge(
  object({
    interested: literal('COMPANY', {
      invalid_type_error: 'Debe ser tipo empresa.',
      required_error: 'Este campo es obligatorio.',
    }),
  })
)
