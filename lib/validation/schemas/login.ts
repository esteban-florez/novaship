import { object, string, type z } from 'zod'
import { defaults } from './defaults'
import messages from '../messages'

export type Fields = z.infer<typeof schema>

export const schema = object({
  email: defaults.email,
  password: string(messages.string),
})
