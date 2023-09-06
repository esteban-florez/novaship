import { defaults } from '../defaults'
import { base } from './base'
import messages from '../../messages'
import { numeric } from '../../refinements'
import { object, string, enum as zodEnum } from 'zod'

export const schema = base.merge(
  object({
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
    jobs: defaults.ids,
  })
)
