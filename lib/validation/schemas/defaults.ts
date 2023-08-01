import { date, string } from 'zod'
import messages from '../messages'
import { hasLower, hasNumber, hasSymbol, hasUpper } from '../refinements'

const today = new Date()
const year18YearsAgo = today.getFullYear() - 18
const today18YearsAgo = new Date(year18YearsAgo, today.getMonth(), today.getDate())

export const defaults = {
  email: string(messages.required).trim().email(messages.email),
  password: string(messages.required).trim()
    .min(8, messages.min(8))
    .max(20, messages.max(20))
    .refine(hasLower, messages.hasLower)
    .refine(hasUpper, messages.hasUpper)
    .refine(hasNumber, messages.hasNumber)
    .refine(hasSymbol, messages.hasSymbol),
  birth: date(messages.date).max(today18YearsAgo, messages.birth),
}
