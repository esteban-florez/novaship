import { object, string, type z } from 'zod'
import messages from '../messages'

export type Fields = z.infer<typeof schema>
// TODO -> esquema no necesario, ya que así no se ejecuta el DELETE xD
export const schema = object({
  id: string(messages.string)
    .cuid(messages.cuid),
})
