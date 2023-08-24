import Carrousel from '@/components/offers/Carrousel'
import Offer from '@/components/offers/Offer'
import { type Metadata } from 'next'
import PageNav from '@/components/offers/PageNav'
import prisma from '@/prisma/client'

export const metadata: Metadata = {
  title: 'Ofertas',
}

export default async function OffersPage() {
  const offers = await prisma.offer.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      fields: true,
      company: true,
      location: true,
    },
  })

  const carruselOffers = offers.splice(0, 5)

  return (
    <>
      <Carrousel offers={carruselOffers} />
      <PageNav />
      <div className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg p-4 pt-1
      md:columns-2 lg:columns-3 xl:rounded-tl-none xl:px-6"
      >
        {offers.map((offer) => {
          return (
            <Offer
              key={offer.id}
              id={offer.id}
              title={offer.title}
              categories={offer.fields}
              description={offer.description}
              owner={offer.company.name}
              location={offer.location.title}
            />
          )
        })}
      </div>
    </>
  )
}
