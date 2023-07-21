import ProfessionalForm from '@/components/profile/professional/ProfessionalForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar perfil profesional',
}

export default async function ProfessionalProfilePage() {
  const session = { user: { email: 'eflorez077@gmail.com' } }

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
