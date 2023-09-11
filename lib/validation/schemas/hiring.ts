import { object, string, type z } from 'zod'
import messages from '../messages'

export type Fields = z.infer<typeof schema>

export const schema = object({
  offerId: string(messages.string)
    .cuid(messages.cuid),
})
