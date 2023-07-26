import UserForm from '@/components/profile/user/UserForm'
import { auth } from '@/lib/auth'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfil de usuario',
}

export default async function UserProfilePage() {
  const { user: sessionUser } = await auth()

  const user = await prisma.authUser.findUnique({
    where: { id: sessionUser.id },
  })

  return (
    <UserForm
      user={user}
    />
  )
}
