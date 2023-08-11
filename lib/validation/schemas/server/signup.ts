import { nativeEnum, object } from 'zod'
import { defaults } from '../defaults'
import { uniqueEmail } from './server-refinements'
import { UserType } from '@prisma/client'
import messages from '../../messages'

export const schema = object({
  email: defaults.email.refine(uniqueEmail, {
    message: 'El correo ingresado ya posee una cuenta asociada.',
  }),
  password: defaults.password,
  type: nativeEnum(UserType, messages.enum),
})
