import { object, string, type z } from 'zod'
import { defaults } from './defaults'

export type Fields = z.infer<typeof schema>

export const schema = object({
  name: string().trim().min(2),
  surname: string().trim().min(2),
  email: defaults.email,
  password: defaults.password,
})
