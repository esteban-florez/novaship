import { type SuggestedOffersWithRelationships } from '@/lib/types'
import OfferItem from './OfferItem'
import { includesValue } from '@/lib/utils/text'

interface Props {
  search: string
  offers: SuggestedOffersWithRelationships
}

export default function OffersList({ search, offers }: Props) {
  return (
    <div className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg p-4 pt-1 md:columns-2 lg:columns-3 xl:rounded-tl-none xl:px-6">
      {offers.map(offer => {
        if (
          (search === '' || includesValue(offer.title, search)) ||
          (includesValue(offer.description, search)) ||
          (includesValue(offer.company.name, search)) ||
          (includesValue(offer.location.title, search))
        ) {
          return (
            <OfferItem
              key={offer.id}
              id={offer.id}
              title={offer.title}
              categories={offer.categories}
              description={offer.description}
              companyName={offer.company.name}
              location={offer.location.title}
            />
          )
        }

        return null
      })}
    </div>
  )
}
