import { number, object, string } from 'zod'
import { defaults } from '../defaults'
import messages from '../../messages'

const MB_IN_BYTES = 2_097_152

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
  image: object({
    size: number(),
  }).refine(file => file.size < MB_IN_BYTES * 2, {
    message: 'El peso máximo es 2 MB.',
  })
    .optional(),
})
