import { array, nativeEnum, number, object, string, type z } from 'zod'
import messages from '../messages'
import { Mode, Schedule, Target } from '@prisma/client'
import { EXPIRATION_DATES } from '../expiration-dates'

export type Fields = z.infer<typeof schema>

export const schema = object({
  title: string(messages.string)
    .min(5, messages.min(5))
    .max(100, messages.max(100)),
  description: string(messages.string)
    .min(15, messages.min(15))
    .max(255, messages.max(255)),
  hours: number(messages.number)
    .min(8, messages.min(8))
    .max(50, messages.max(50))
    .int()
    .positive(),
  limit: number(messages.number)
    .min(1, messages.min(1))
    .max(50, messages.max(50))
    .int()
    .positive(),
  salary: number(messages.number)
    .min(8, messages.min(8))
    .max(50, messages.max(50))
    .positive(),
  fields: array(string(messages.string)
    .cuid(messages.cuid), messages.array)
    .nonempty(messages.nonempty),
  skills: array(string(messages.string)
    .cuid(messages.cuid), messages.array)
    .nonempty(messages.nonempty),
  location: string(messages.string)
    .cuid(messages.cuid),
  expiresAt: nativeEnum(EXPIRATION_DATES, messages.enum),
  mode: nativeEnum(Mode, messages.enum),
  target: nativeEnum(Target, messages.enum),
  schedule: nativeEnum(Schedule, messages.enum),
})
