import { object, string, type z } from 'zod'
import { defaults } from '../defaults'
import messages from '../../messages'
import { numeric } from '../../refinements'

export type Fields = z.infer<typeof schema>

export const schema = object({
  name: string(messages.string)
    .min(4, messages.min(4))
    .max(100, messages.max(100)),
  email: defaults.email,
  phone: string(messages.string)
    .length(11, {
      message: 'Debe tener 11 dígitos.',
    }).refine(numeric, messages.numeric),
  locationId: string(messages.string)
    .cuid(messages.cuid),
  description: string(messages.string)
    .min(20, messages.min(20))
    .max(255, messages.max(255)),
})
