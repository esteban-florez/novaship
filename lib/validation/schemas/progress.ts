import { date, number, object, string } from 'zod'
import messages from '../messages'
import { DateTime } from 'luxon'

const yesterday = DateTime.now().minus({ days: 1 }).toJSDate()

export const schema = (maxHours: number) => object({
  title: string(messages.string)
    .min(10, messages.min(10))
    .max(50, messages.max(50)),
  description: string(messages.string)
    .min(10, messages.min(10))
    .max(255, messages.max(255)),
  hours: number(messages.number)
    .min(1, messages.minNumber(1))
    .max(maxHours, messages.maxNumber(maxHours))
    .step(1, {
      message: 'Debe ser un número entero.',
    }),
  startsAt: date({ ...messages.date, coerce: true })
    .min(yesterday, messages.minDate(yesterday)),
  endsAt: date({ ...messages.date, coerce: true })
    .min(yesterday, messages.minDate(yesterday)),
})
