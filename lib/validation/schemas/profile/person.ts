import { enum as zodEnum, object, string, type z } from 'zod'
import { defaults } from '../defaults'
import messages from '../../messages'
import { numeric } from '../../refinements'

export type Fields = z.infer<typeof schema>

// TODO -> employable
// DRY schema
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
  birth: defaults.birth,
  ci: string(messages.string)
    .min(7, messages.min(7))
    .max(9, messages.max(9))
    .refine(numeric, messages.numeric),
  skills: defaults.ids
    .nonempty(messages.nonempty),
  employable: zodEnum(['true', 'false'], {
    invalid_type_error: 'La opción seleccionada es inválida.',
    required_error: 'Este campo es obligatorio.',
  }).transform(str => str === 'true'),
  categories: defaults.ids
    .nonempty(messages.nonempty),
  grades: defaults.ids
    .nonempty(messages.nonempty),
})
