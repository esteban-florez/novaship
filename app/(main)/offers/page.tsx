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
      <div className="card card-body m-2 bg-white shadow">
        <Filter />
      </div>
      <div className="mx-auto my-4 w-full columns-1 gap-4 px-4 md:columns-2 lg:columns-3">
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
