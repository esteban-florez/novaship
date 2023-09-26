import PageContent from '@/components/offers-details/PageContent'
import { auth } from '@/lib/auth/pages'
import { getOffer } from '@/lib/data-fetching/offer'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Ver oferta',
}

interface Context {
  params: { id: string }
}

export default async function OfferPage({ params: { id } }: Context) {
  const { id: userId } = await auth.user()
  const offer = await getOffer({ id })

  if (offer === null) {
    redirect('/home/offers?alert=offer_not_found')
  }

  return (
    <PageContent
      offer={offer}
      userId={userId}
    />
  )
}
