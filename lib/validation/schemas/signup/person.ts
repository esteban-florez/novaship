import { defaults } from '../defaults'
import { base } from './base'
import messages from '../../messages'
import { numeric } from '../../refinements'
import { array, object, string } from 'zod'

export const schema = base.merge(
  object({
    birth: defaults.birth,
    ci: string(messages.string)
      .min(7, messages.min(7))
      .max(9, messages.max(9))
      .refine(numeric, messages.numeric),
    skills: array(string(), messages.array)
      .nonempty(messages.nonempty)
      .max(5, messages.maxArray(5)),
  })
)

//   certification String
//   image       String?
