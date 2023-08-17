import Carrousel from '@/components/offers/Carrousel'
import Offer from '@/components/offers/Offer'
import { type Metadata } from 'next'
import data from './data.json'
import PageNav from '@/components/offers/PageNav'

const offers = data

export const metadata: Metadata = {
  title: 'Ofertas',
}

export default function OffersPage() {
  return (
    <>
      <Carrousel />
      <PageNav />
      <div className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg p-4 pt-1 md:columns-2 lg:columns-3 xl:rounded-tl-none xl:px-6">
        {offers.map((offer) => {
          return (
            <Offer
              key={offer.id}
              title={offer.title}
              categories={offer.categories}
              description={offer.description}
              owner={offer.owner}
              ubication={offer.ubication}
            />
          )
        })}
      </div>
    </>
  )
}
