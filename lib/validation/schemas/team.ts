import { object, string } from 'zod'
import messages from '../messages'

export const schema = object({
  name: string(messages.string)
    .min(4, messages.min(4))
    .max(20, messages.max(20)),
  description: string(messages.string)
    .min(30, messages.min(30))
    .max(255, messages.max(255)),
})
