import { number, object } from 'zod'
import messages from '../messages'
import { defaults } from './defaults'

export const schema = object({
  hours: number(messages.number)
    .min(1, messages.minNumber(1))
    .max(100, messages.maxNumber(100))
    .step(1, {
      message: 'Debe ser un número entero.',
    }),
  gradeId: defaults.id,
  categories: defaults.ids.nonempty(messages.nonempty),
})
