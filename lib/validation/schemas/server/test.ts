import { object } from 'zod'
import { schema as base } from '../test'
import { defaults } from '../defaults'
import prisma from '@/prisma/client'

const uniqueEmail = async (input: string) => {
  const options = { select: { email: true } }

  let users = await prisma.person.findMany(options)
  users = users.concat(await prisma.company.findMany(options))
  users = users.concat(await prisma.institute.findMany(options))

  return !users.some(user => user.email === input)
}

export const schema = base.merge(
  object({
    email: defaults.email.refine(uniqueEmail, {
      message: 'El correo ingresado ya posee una cuenta asociada.',
    }),
  })
)
