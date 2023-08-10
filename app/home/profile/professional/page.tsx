import ProfessionalForm from '@/components/profile/professional/ProfessionalForm'
// DEV
// import { auth } from '@/lib/auth/pages'
// import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar perfil profesional',
}

export default async function ProfessionalProfilePage() {
  // const person = await auth.person()

  // const profile = await prisma.profile.findFirst({
  //   where: { personId: person.id },
  // })

  // return <ProfessionalForm profile={profile} />
  return <ProfessionalForm />
}
