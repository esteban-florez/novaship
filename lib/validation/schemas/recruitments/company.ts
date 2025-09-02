import { literal, object } from 'zod'
import { base } from './shared'
import { notRefined as dates, datesRefine } from './dates'

const merged = base.merge(dates)

const full = merged.merge(
  object({
    interested: literal('COMPANY', {
      invalid_type_error: 'Debe ser tipo empresa.',
      required_error: 'Este campo es obligatorio.',
    }),
  })
)

export const schema = full.superRefine(datesRefine)

export const schemaOmit = full.omit({ internshipId: true, interested: true }).superRefine(datesRefine)
