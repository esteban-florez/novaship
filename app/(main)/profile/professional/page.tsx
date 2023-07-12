import ProfessionalForm from '@/components/profile/professional/ProfessionalForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { getServerSession } from 'next-auth'

export const metadata: Metadata = {
  title: 'Registrar perfil profesional',
}

export default async function ProfessionalProfilePage() {
  const session = await getServerSession()

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email ?? '',
    },
    include: {
      profile: {
        select: {
          title: true,
          description: true,
        },
      },
    },
  })

  return <ProfessionalForm title={user?.profile?.title ?? ''} description={user?.profile?.description ?? ''} />
}
