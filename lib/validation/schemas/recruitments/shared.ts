import { object } from 'zod'
import { defaults } from '../defaults'

export const base = object({
  internshipId: defaults.id,
  vacantId: defaults.id,
})
