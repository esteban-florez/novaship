import { object } from 'zod'
import { schema as base } from '../test'
import { defaults } from '../defaults'
import { uniqueEmail } from './server-refinements'

export const schema = base.merge(
  object({
    email: defaults.email.refine(uniqueEmail, {
      message: 'El correo ingresado ya posee una cuenta asociada.',
    }),
  })
)
