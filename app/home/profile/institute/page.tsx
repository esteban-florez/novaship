import InstituteForm from '@/components/profile/institute/InstituteForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfil institucional',
}

export default async function InstituteProfilePage() {
  const institute = await prisma.institute.findFirst()

  return (
    <InstituteForm institute={institute} />
  )
}
