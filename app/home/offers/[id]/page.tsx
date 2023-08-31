import PageContent from '@/components/offers-details/PageContent'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Ver oferta',
}

interface Context {
  params: { id: string }
}

export default async function OfferPage({ params: { id } }: Context) {
  const offer = await prisma.offer.findFirst({
    where: {
      id,
      deletedAt: null,
    },
    include: {
      company: true,
      fields: true,
      skills: true,
      location: true,
    },
  })

  if (offer === null) {
    redirect('/home/offers')
  }

  return <PageContent offer={offer} />
}
