import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'
import PageContent from '@/components/offers/PageContent'

export const metadata: Metadata = {
  title: 'Ofertas',
}

export default async function OffersPage() {
  const activeUser = await auth.user()

  const offers = await prisma.offer.findMany({
    include: {
      fields: true,
      company: true,
      location: true,
    },
  })

  const allOffers = offers.filter(offer => offer.companyId !== activeUser.id)
  const myOffers = offers.filter(offer => offer.companyId === activeUser.id)

  const carruselOffers = allOffers.splice(0, 5)

  return <PageContent generalOffers={allOffers} myOffers={myOffers} carruselOffers={carruselOffers} />
}
