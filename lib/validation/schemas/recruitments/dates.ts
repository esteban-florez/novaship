import { object, date, type RefinementCtx } from 'zod'
import messages from '../../messages'
import { DateTime } from 'luxon'

const now = new Date()
const minEnd = DateTime.now().plus({ days: 1 }).toJSDate()

export const datesRefine = (data: { startsAt: Date, endsAt: Date }, ctx: RefinementCtx) => {
  const { startsAt, endsAt } = data

  const startsAtDt = DateTime.fromJSDate(startsAt)
  const endsAtDt = DateTime.fromJSDate(endsAt)

  const diff = startsAtDt.diff(endsAtDt, 'days')

  console.log(diff.days)

  if (diff.days >= 0) {
    ctx.addIssue({
      message: 'Debe ser posterior a la fecha de inicio.',
      path: ['endsAt'],
      code: 'custom',
    })
  }

  if (diff.days < -89) {
    ctx.addIssue({
      message: 'Maximo 90 días después de la fecha de inicio.',
      path: ['endsAt'],
      code: 'custom',
    })
  }
}

export const notRefined = object({
  startsAt: date({ ...messages.date, coerce: true })
    .min(now, messages.minDate(now)),
  endsAt: date({ ...messages.date, coerce: true })
    .min(minEnd, messages.minDate(minEnd)),
})

export const schema = notRefined.superRefine(datesRefine)
