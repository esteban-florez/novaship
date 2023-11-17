import { number, object } from 'zod'
import messages from '../../messages'
// EU
export const schema = (maxHours: number) => object({
  completed: number(messages.number)
    .min(0, messages.minNumber(0))
    .max(maxHours, messages.maxNumber(maxHours))
    .step(1, {
      message: 'Debe ser un número entero.',
    }),
})
