import { boolean, object, string, type z } from 'zod'
import messages from '../messages'

export type Fields = z.infer<typeof schema>

export const schema = object({
  id: string(messages.string)
    .cuid(messages.cuid),
  test: boolean(messages.boolean),
  // selectedPersons: array(object({
  //   id: string(messages.string)
  //     .cuid(messages.cuid),
  //   name: string(messages.string),
  //   email: defaults.email,
  //   selected: boolean(messages.boolean),
  // }), messages.string),
})
