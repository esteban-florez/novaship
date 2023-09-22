import { defaults } from '../defaults'
import { base } from './base'
import messages from '../../messages'
import { numeric } from '../../refinements'
import { nativeEnum, object, string, enum as zodEnum } from 'zod'
import { Gender } from '@prisma/client'

export const schema = base.merge(
  object({
    birth: defaults.birth,
    gender: nativeEnum(Gender, messages.enum),
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
