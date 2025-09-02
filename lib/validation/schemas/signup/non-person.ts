import { object, string } from 'zod'
import { base } from './base'
import messages from '../../messages'
import { numeric } from '../../refinements'
import { defaults } from '../defaults'

export const schema = base.merge(
  object({
    rif: string(messages.string)
      .min(10, messages.min(10))
      .refine(numeric, messages.numeric),
    certification: defaults.client.requiredImage,
  })
)
