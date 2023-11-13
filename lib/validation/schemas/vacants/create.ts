import { DURATIONS } from '@/lib/shared/durations'
import { object, enum as zenum } from 'zod'
import { defaults } from '../defaults'
import { schema as base } from './update'
import messages from '../../messages'

export const schema = base.merge(
  object({
    jobId: defaults.id,
    duration: zenum(DURATIONS as [string, ...string[]], messages.enum),
  })
)
