import UserForm from '@/components/profile/user/UserForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { getServerSession } from 'next-auth'

export const metadata: Metadata = {
  title: 'Perfil de usuario',
}

export default async function UserProfilePage() {
  const session = await getServerSession()

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email ?? '',
    },
  })

  return (
    <UserForm
      name={user?.name ?? ''}
      surname={user?.surname ?? ''}
      email={user?.email ?? ''}
      phone={user?.phone ?? ''}
      address={user?.address ?? ''}
      bio={user?.bio ?? ''}
    />
  )
}
