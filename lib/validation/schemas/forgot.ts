import { object } from 'zod'
import { defaults } from './defaults'

export const schema = object({
  email: defaults.email,
})
