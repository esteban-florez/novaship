import InstituteForm from '@/components/profile/institute/InstituteForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfil institucional',
}

export default async function InstituteProfilePage() {
  const session = { user: { email: 'eflorez077@gmail.com' } }

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email ?? '',
    },
  })

  const institute = await prisma.institute.findFirst({
    where: {
      director: { id: user?.id },
    },
  })
  // RANT -> pasar propiedad por propiedad en vez de pasarlo directamente
  return <InstituteForm name={institute?.name ?? ''} email={institute?.email ?? ''} address={institute?.address ?? ''} description={institute?.description ?? ''} phone={institute?.phone ?? ''} />
}
