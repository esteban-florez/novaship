import { array, object, string, type z } from 'zod'
import messages from '../messages'

export type Fields = z.infer<typeof schema>

export const schema = object({
  members: array(string(), messages.array)
    .nonempty(messages.nonempty),
})
