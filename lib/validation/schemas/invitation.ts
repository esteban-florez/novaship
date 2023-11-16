import { nativeEnum, object, type z } from 'zod'
import messages from '../messages'
import { Status } from '@prisma/client'

export type Fields = z.infer<typeof schema>

export const schema = object({
  status: nativeEnum(Status, messages.enum),
})
