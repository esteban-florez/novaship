import PageContent from '@/components/offers-details/PageContent'
import { auth } from '@/lib/auth/pages'
import { getOffer } from '@/lib/data-fetching/offer'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Ver oferta',
}

export default async function OfferPage({ params: { id } }: PageContext) {
  const { id: userId } = await auth.user()
  const offer = await getOffer({ id })

  if (offer === null) {
    notFound()
  }

  return (
    <PageContent
      offer={offer}
      userId={userId}
    />
  )
}
