import { enum as zenum, object } from 'zod'
import messages from '../../messages'
import { defaults } from '../defaults'
import { INTERNSHIPS_HOURS } from '@/lib/shared/durations'

export const schema = object({
  hours: zenum(INTERNSHIPS_HOURS, messages.enum),
  gradeId: defaults.id,
  categories: defaults.ids.nonempty(messages.nonempty),
})
