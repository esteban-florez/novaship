import { enum as zEnum, object } from 'zod'
import messages from '../../messages'

export const schema = object({
  status: zEnum(['ACCEPTED', 'REJECTED'], messages.enum),
})
