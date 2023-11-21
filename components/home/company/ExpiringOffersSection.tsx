import EmptyContent from '@/components/EmptyContent'
import { daysLeft } from '@/lib/utils/date'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { type Hiring } from '@prisma/client'
import Link from 'next/link'

interface Props {
  offers: Array<{
    id: string
    title: string
    hiring: Hiring[]
    expiresAt: Date | null
  }>
}

export default function ExpiringOffersSection({ offers }: Props) {
  return (
    <div className="col-span-1">
      <div className="p-4 h-full gap-4 card bg-white border border-zinc-300 rounded-none sm:rounded-md shadow-md">
        <h3 className="text-lg font-bold text-primary">Ofertas por vencer</h3>
        {offers.length > 0
          ? (
            <article className="w-full divide-y card bg-white border border-zinc-300 rounded-md">
              {offers.map((offer) => {
                return (
                  <div
                    className="tooltip"
                    data-tip={offer.title}
                    key={offer.id}
                  >
                    <div className="p-2 flex flex-col">
                      <div className="inline-flex items-center justify-between gap-x-4">
                        <p className="text-left font-semibold text-neutral-600 line-clamp-1">
                          {offer.title}
                        </p>
                        <Link href={`/home/offers/${offer.id}`}>
                          <ArrowTopRightOnSquareIcon className="h-5 w-5 hover:text-primary" />
                        </Link>
                      </div>
                      <div className="inline-flex justify-between gap-x-4">
                        <small className="text-primary font-semibold">
                          {daysLeft(offer.expiresAt ?? new Date())}
                        </small>
                        <small className="text-neutral-500">
                          {offer.hiring.length} postulaciones
                        </small>
                      </div>
                    </div>
                  </div>
                )
              })}
            </article>
            )
          : (
            <div className="h-full max-h-96">
              <div className="my-auto pb-2 sm:pb-0 items-center">
                <EmptyContent title="No hay ofertas próximas a vencer." />
              </div>
            </div>
            )}
      </div>
    </div>
  )
}
