import prisma from '@/prisma/client'

export const uniqueEmail = async (input: string) => {
  const authKeys = await prisma.authKey.findMany({
    select: { id: true },
  })

  return authKeys.every(key => {
    const email = key.id.slice(6)
    return email !== input
  })
}
