import { nativeEnum, object } from 'zod'
import messages from '../../messages'
import { Status } from '@prisma/client'

export const schema = object({
  status: nativeEnum(Status, messages.enum),
})
