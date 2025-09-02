import { boolean, nullable, object } from 'zod'

const schedule = boolean()
  .array()
  .length(7)
  .array()
  .length(24)

export const schema = object({
  schedule: nullable(schedule),
})
