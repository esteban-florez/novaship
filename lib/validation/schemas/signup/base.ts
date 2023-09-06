import { object, string } from 'zod'
import { defaults } from '../defaults'
import messages from '../../messages'
import { numeric } from '../../refinements'

export const base = object({
  name: string(messages.string)
    .min(4, messages.min(4))
    .max(100, messages.max(100)),
  email: defaults.email,
  password: defaults.password,
  phone: string(messages.string)
    .length(11, {
      message: 'Debe tener 11 dígitos.',
    }).refine(numeric, messages.numeric),
  locationId: string(messages.string)
    .cuid(messages.cuid),
  description: string(messages.string)
    .min(50, messages.min(50))
    .max(255, messages.max(255)),
  image: defaults.client.image,
})
