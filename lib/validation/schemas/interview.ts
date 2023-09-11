import { date, nativeEnum, object, string, type z } from 'zod'
import messages from '../messages'
import { Platform, Status } from '@prisma/client'

export type Fields = z.infer<typeof schema>

const dateOptions = {
  ...messages.date,
  coerce: true,
}

export const schema = object({
  status: nativeEnum(Status, messages.enum),
  date: date(dateOptions),
  link: string(messages.string)
    .min(5, messages.min(5))
    .max(100, messages.max(100)),
  platform: nativeEnum(Platform, messages.enum),
})
