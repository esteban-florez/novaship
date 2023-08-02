import { nativeEnum, number, object, string, type z } from 'zod'
import { UserType } from '@prisma/client'
import { defaults } from './defaults'
import messages from '../messages'

export type Fields = z.infer<typeof schema>

export const schema = object({
  email: defaults.email,

  password: defaults.password,

  name: string(messages.required)
    .min(2, messages.min(2))
    .max(100, messages.max(100)),

  birth: defaults.birth,

  salary: number(messages.required)
    .min(10, messages.minN(10))
    .max(1000, messages.maxN(1000))
    .step(0.01, { message: 'Máximo dos dígitos decimales.' }),

  type: nativeEnum(UserType, messages.enum),

  description: string(messages.required)
    .max(255, messages.max(255))
    .optional(),

  locationId: string(messages.required)
    .cuid(messages.invalidOption),
})
