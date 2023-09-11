import { array, nativeEnum, number, object, string, type z } from 'zod'
import messages from '../messages'
import { Mode, Schedule } from '@prisma/client'
import { dates } from '../expiration-dates'

export type Fields = z.infer<typeof schema>

export const schema = object({
  title: string(messages.string)
    .min(5, messages.min(5))
    .max(100, messages.max(100)),
  description: string(messages.string)
    .min(15, messages.min(15))
    .max(255, messages.max(255)),
  hours: number(messages.number)
    .min(1, messages.min(1))
    .max(60, messages.max(60))
    .int()
    .positive(),
  limit: number(messages.number)
    .min(1, messages.min(1))
    .max(50, messages.max(50))
    .int()
    .positive(),
  salary: number(messages.number)
    .min(1, messages.min(1))
    .max(2000, messages.max(2000))
    .positive(),
  categories: array(string(messages.string)
    .cuid(messages.cuid), messages.array)
    .nonempty(messages.nonempty),
  skills: array(string(messages.string)
    .cuid(messages.cuid), messages.array)
    .nonempty(messages.nonempty),
  locationId: string(messages.string)
    .cuid(messages.cuid),
  jobId: string(messages.string)
    .cuid(messages.cuid),
  expiresAt: nativeEnum(dates, messages.enum),
  mode: nativeEnum(Mode, messages.enum),
  schedule: nativeEnum(Schedule, messages.enum),
})
