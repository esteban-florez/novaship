import { object, type z } from 'zod'
import { defaults } from './defaults'

export type Fields = z.infer<typeof schema>

export const schema = object({
  offerId: defaults.id.optional(),
  userId: defaults.id.optional(),
})
