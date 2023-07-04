import { getServerSession } from 'next-auth'
import authOptions from './authOptions'
import prisma from '@/prisma/client'

export default async function user() {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email
  if (email === null || email === undefined) return null

  return await prisma.user.findUnique({
    where: {
      email,
    },
  })
}
