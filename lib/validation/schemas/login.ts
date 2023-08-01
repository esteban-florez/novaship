import { object, type z } from 'zod'
import { defaults } from './defaults'

export type Fields = z.infer<typeof schema>

export const schema = object({
  email: defaults.email,
  password: defaults.password,
})
