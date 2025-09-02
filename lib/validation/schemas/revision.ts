import { object, string, type z } from 'zod'
import messages from '../messages'
import { defaults } from './defaults'

export type Fields = z.infer<typeof schema>

export const schema = object({
  content: defaults.description,
  taskId: string(messages.string)
    .cuid(messages.cuid)
    .optional(),
  subtaskId: string(messages.string)
    .cuid(messages.cuid)
    .optional(),
  filter: string(messages.string)
    .optional(),
})
