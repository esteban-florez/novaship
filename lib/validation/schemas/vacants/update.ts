import { number, object } from 'zod'
import { defaults } from '../defaults'
import messages from '../../messages'

export const schema = object({
  description: defaults.description,
  grades: defaults.ids
    .nonempty(messages.nonempty),
  skills: defaults.ids
    .nonempty(messages.nonempty),
  categories: defaults.ids
    .nonempty(messages.nonempty),
  limit: number(messages.number)
    .min(1, messages.minNumber(1))
    .max(20, messages.maxNumber(20)),
  locationId: defaults.id,
})
