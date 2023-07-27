import InstituteForm from '@/components/profile/institute/InstituteForm'
import { auth } from '@/lib/auth'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfil institucional',
}

export default async function InstituteProfilePage() {
  const user = await auth()

  const institute = await prisma.institute.findFirst({
    where: {
      director: { id: user.id },
    },
  })

  return (
    <InstituteForm institute={institute} />
  )
}
