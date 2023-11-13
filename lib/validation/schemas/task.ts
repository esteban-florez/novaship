import { array, object, string, type z } from 'zod'
import messages from '../messages'
import { defaults } from './defaults'

export type Fields = z.infer<typeof schema>

export const schema = object({
  title: string(messages.string)
    .min(5, messages.min(5))
    .max(40, messages.max(40)),
  description: defaults.description,
  members: array(string(), messages.array)
    .nonempty(messages.nonempty)
    .optional(),
  responsable: string(messages.string)
    .cuid(messages.cuid)
    .optional(),
  projectId: string(messages.string)
    .cuid(messages.cuid)
    .optional(),
})
