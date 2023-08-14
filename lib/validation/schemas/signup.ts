import { nativeEnum, object, string, type z } from 'zod'
import { defaults } from './defaults'
import messages from '../messages'
import { UserType } from '@prisma/client'

export type Fields = z.infer<typeof schema>

export const schema = object({
  userType: nativeEnum(UserType, messages.enum),
  email: defaults.email,
  password: defaults.password,
  name: string(messages.string)
    .min(4, messages.min(4))
    .max(100, messages.max(100)),
  ci: string(messages.string)
    .regex(/\d{6,8}/, {
      message: 'Debe tener entre 6 y 8 dígitos numericos.',
    }),
  rif: string(messages.string)
    .regex(/\d{10,}/, {
      message: 'Debe tener al menos 10 dígitos numéricos.',
    }),
  phone: string(messages.string)
    .length(11, {
      message: 'Debe tener 11 dígitos.',
    }),

})
