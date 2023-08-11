import prisma from '@/prisma/client'

export const uniqueEmail = async (input: string) => {
  const options = { select: { email: true } }

  let users = await prisma.person.findMany(options)
  users = users.concat(await prisma.company.findMany(options))
  users = users.concat(await prisma.institute.findMany(options))

  return !users.some(user => user.email === input)
}
