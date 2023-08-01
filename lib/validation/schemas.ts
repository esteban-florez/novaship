import { date, nativeEnum, number, object, string } from 'zod'
import { password } from './refinements'
import { UserType } from '@prisma/client'

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

export const test = object({
  email: string().email(),
  name: string().min(2).max(100),
  password: string().min(8).max(20).refine(password),
  birth: date(),
  salary: number().min(10).max(1000).step(0.01),
  type: nativeEnum(UserType),
  description: string().max(255).optional(),
  locationId: string().cuid(),
})
