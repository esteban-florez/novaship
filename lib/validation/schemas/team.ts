import { array, object, string } from 'zod'
import messages from '../messages'

export const schema = object({
  name: string(messages.string)
    .min(5, messages.min(5))
    .max(40, messages.max(40)),
  description: string(messages.string)
    .min(30, messages.min(30))
    .max(255, messages.max(255)),
  categories: array(string(messages.string), messages.array)
    .nonempty(messages.nonempty)
    .max(5, messages.maxArray(5)),
  memberships: array(string(messages.string), messages.array)
    .nonempty(messages.nonempty)
    .max(20, messages.maxArray(20)),
})
