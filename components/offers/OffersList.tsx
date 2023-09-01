import { type Offers } from '@/lib/types'
import OfferItem from './OfferItem'
import { includesValue } from '@/lib/utils/text'

interface Props {
  search: string
  offers: Offers[]
}

export default function OffersList({ search, offers }: Props) {
  return (
    <div className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg p-4 pt-1 md:columns-2 lg:columns-3 xl:rounded-tl-none xl:px-6">
      {offers.map(offer => {
        if (search === '' || includesValue(offer.title, search)) {
          return (
            <OfferItem
              key={offer.id}
              id={offer.id}
              title={offer.title}
              categories={offer.fields}
              description={offer.description}
              company={offer.company}
              location={offer.location.title}
            />
          )
        }

        return null
      })}
    </div>
  )
}
