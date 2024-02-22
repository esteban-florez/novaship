import { type OffersFull } from '@/lib/types'
import OfferItem from './OfferItem'
import EmptyContent from '../EmptyContent'
import { getExpiresAtDate } from '@/lib/utils/date'

interface Props {
  offers: OffersFull[]
}

export default function OffersList({ offers }: Props) {
  if (offers.length === 0) {
    return (
      <EmptyContent
        title="No encontramos nada..."
        className="sm:w-2/4"
      >
        Parece que no hay ofertas registradas aún.
      </EmptyContent>
    )
  }

  return (
    <div className="mt-4 mx-auto mb-4 w-full columns-1 gap-4 rounded-lg p-4 pt-1 md:columns-2 lg:columns-3 xl:rounded-tl-none xl:px-6">
      {offers.map((offer) => {
        return (
          <OfferItem
            key={offer.id}
            id={offer.id}
            title={offer.title}
            categories={offer.categories}
            description={offer.description}
            companyName={offer.company.name}
            location={offer.location.title}
            limit={offer.limit}
            expiresAt={getExpiresAtDate(offer.expiresAt)}
          />
        )
      })}
    </div>
  )
}
