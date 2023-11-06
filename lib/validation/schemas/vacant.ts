import { number, object, enum as zenum } from 'zod'
import { defaults } from './defaults'
import messages from '../messages'
import { DURATIONS } from '@/lib/shared/durations'

export const schema = object({
  jobId: defaults.id,
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
  duration: zenum(DURATIONS as [string, ...string[]], messages.enum),
  locationId: defaults.id,
})
