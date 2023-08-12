import { array, boolean, object, string, type z } from 'zod'
import messages from '../messages'
import { defaults } from './defaults'

export type Fields = z.infer<typeof schema>

export const schema = object({
  selectedPersons: array(object({
    id: string(messages.string)
      .cuid(messages.cuid),
    name: string(messages.string),
    email: defaults.email,
    selected: boolean(messages.boolean),
  }), messages.string),
})
