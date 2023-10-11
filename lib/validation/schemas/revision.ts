import { object, string, type z } from 'zod'
import messages from '../messages'

export type Fields = z.infer<typeof schema>

export const schema = object({
  content: string(messages.string)
    .min(15, messages.min(15))
    .max(255, messages.max(255)),
  taskId: string(messages.string)
    .cuid(messages.cuid)
    .optional(),
  subtaskId: string(messages.string)
    .cuid(messages.cuid)
    .optional(),
})
