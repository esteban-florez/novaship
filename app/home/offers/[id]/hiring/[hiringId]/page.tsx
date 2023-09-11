import HiringForm from '@/components/offers-details/HiringForm'
import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Ver postulación',
}

interface Context {
  params: { id: string, hiringId: string }
}

export default async function HiringPage({ params: { id, hiringId } }: Context) {
  const activeUser = await auth.user()

  const hiring = await prisma.hiring.findFirst({
    where: {
      id: hiringId,
      offer: { companyId: activeUser.id },
    },
    include: {
      interviews: true,
      person: { select: { id: true } },
    },
  })

  if (hiring === null) {
    redirect(`/home/offers/${id}`)
  }

  return (
    <HiringForm
      hiring={hiring}
      offerId={hiring.offerId}
    />
  )
}
