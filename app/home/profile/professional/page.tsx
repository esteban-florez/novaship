import ProfessionalForm from '@/components/profile/professional/ProfessionalForm'
import { auth } from '@/lib/auth'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar perfil profesional',
}

export default async function ProfessionalProfilePage() {
  const { user } = await auth()

  const profile = await prisma.profile.findFirst({
    where: { userId: user.id },
  })

  return <ProfessionalForm profile={profile} />
}
