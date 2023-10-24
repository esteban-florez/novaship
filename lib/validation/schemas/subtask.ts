import { array, nativeEnum, object, string, type z } from 'zod'
import messages from '../messages'
import { TaskStatus } from '@prisma/client'

export type Fields = z.infer<typeof schema>

export const schema = object({
  title: string(messages.string)
    .min(5, messages.min(5))
    .max(40, messages.max(40)),
  description: string(messages.string)
    .min(15, messages.min(15))
    .max(255, messages.max(255)),
  status: nativeEnum(TaskStatus, messages.enum).optional(),
  taskId: string(messages.string)
    .cuid(messages.cuid)
    .optional(),
  members: array(string(), messages.array)
    .nonempty(messages.nonempty)
    .optional(),
})
