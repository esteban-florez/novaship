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
  const offer = await prisma.offer.findUnique({
    where: {
      id,
    },
    include: {
      company: true,
      fields: true,
      location: true,
      skills: true,
    },
  })

  if (offer === null) {
    redirect('/home/offers')
  }

  return (
    <PageContent offer={offer} />
  )
}
