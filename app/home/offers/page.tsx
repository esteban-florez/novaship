import Carrousel from '@/components/offers/Carrousel'
import Offer from '@/components/offers/Offer'
import { type Metadata } from 'next'
import data from './data.json'
import Filter from '@/components/offers/Filter'

const offers = data

export const metadata: Metadata = {
  title: 'Ofertas',
}

export default function OffersPage() {
  return (
    <>
      <Carrousel />
      <div className="px-4">
        <Filter />
        <div className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg md:columns-2 lg:columns-3 xl:rounded-tl-none xl:bg-white xl:p-6">
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
      </div>
    </>
  )
}
