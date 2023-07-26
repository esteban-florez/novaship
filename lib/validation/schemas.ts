import { object, string } from 'zod'
import { password } from './refinements'

const defaults = {
  email: string().trim().email(),
  password: string().trim().min(8).max(20).refine(password),
}

export const signup = object({
  name: string().trim().min(2),
  surname: string().trim().min(2),
  email: defaults.email,
  password: defaults.password,
})

export const login = object({
  email: defaults.email,
  password: defaults.password,
})
