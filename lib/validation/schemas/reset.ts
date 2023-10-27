import { object, string } from 'zod'
import { defaults } from './defaults'
import messages from '../messages'

export const schema = object({
  password: defaults.password,
  confirmation: string(messages.string),
}).refine((data) => data.password === data.confirmation, {
  message: 'Las contraseñas no coinciden.',
  path: ['confirmation'],
})
