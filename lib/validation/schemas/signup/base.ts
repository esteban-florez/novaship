import { object, string } from 'zod'
import { defaults } from '../defaults'
import messages from '../../messages'

export const base = object({
  name: string(messages.string)
    .min(4, messages.min(4))
    .max(100, messages.max(100)),
  email: defaults.email,
  password: defaults.password,
  phone: string(messages.string)
    .length(11, {
      message: 'Debe tener 11 dígitos.',
    }),
  description: string(messages.string)
    .max(255, messages.max(255))
    .optional(),
  image: defaults.client.image,
})
