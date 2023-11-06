import { array, nativeEnum, object, string, type z } from 'zod'
import messages from '../messages'
import { Visibility } from '@prisma/client'
import { defaults } from './defaults'

export type Fields = z.infer<typeof schema>

export const schema = object({
  title: string(messages.string)
    .min(5, messages.min(5))
    .max(40, messages.max(40)),
  description: defaults.description,
  visibility: nativeEnum(Visibility, messages.enum),
  categories: array(string(messages.string)
    .cuid(messages.cuid), messages.array)
    .nonempty(messages.nonempty),
  teamId: string(messages.string)
    .cuid(messages.cuid)
    .optional(),
})
