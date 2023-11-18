import { number, object, string } from 'zod'
import messages from '../messages'

export const schema = (maxHours: number) => object({
  description: string(messages.string)
    .min(10, messages.min(10))
    .max(50, messages.max(50)),
  hours: number(messages.number)
    .min(1, messages.minNumber(1))
    .max(maxHours, messages.maxNumber(maxHours))
    .step(1, {
      message: 'Debe ser un número entero.',
    }),
})
