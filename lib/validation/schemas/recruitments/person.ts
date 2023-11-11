import { literal, object } from 'zod'
import { base } from './shared'

export const schema = base.merge(
  object({
    interested: literal('PERSON', {
      invalid_type_error: 'Debe ser tipo persona.',
      required_error: 'Este campo es obligatorio.',
    }),
  })
)
