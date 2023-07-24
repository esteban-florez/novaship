import InstituteForm from '@/components/profile/institute/InstituteForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfil institucional',
}

export default async function InstituteProfilePage() {
  const user = await prisma.user.findFirst()

  const institute = await prisma.institute.findFirst({
    where: {
      director: { id: user?.id },
    },
  })
  // TODO -> pasar propiedad por propiedad en vez de pasarlo directamente
  return <InstituteForm name={institute?.name ?? ''} email={institute?.email ?? ''} address={institute?.address ?? ''} description={institute?.description ?? ''} phone={institute?.phone ?? ''} />
}
