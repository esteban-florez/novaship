import { boolean, object } from 'zod'

export const schema = object({
  schedule: boolean()
    .array()
    .length(7)
    .array()
    .length(24),
})
