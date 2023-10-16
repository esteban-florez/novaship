import { type Status } from '@prisma/client'
import AvatarIcon from '../AvatarIcon'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { statuses } from '@/lib/translations'
import Link from 'next/link'

interface Props {
  offerId: string
  hiring: Array<{
    id: string
    personId: string
    person: {
      name: string
    }
    status: Status
  }>
}

export default function HiringList({ offerId, hiring }: Props) {
  return (
    <section className="mt-2 flex flex-col gap-4 sm:flex-row">
      {hiring.map(hiring => {
        return (
          <div key={hiring.id} className="card flex flex-col gap-2 rounded-md border border-neutral-300 px-8 py-4 shadow-xl">
            <div className="flex items-center gap-x-2">
              <AvatarIcon />
              <p>{hiring.person.name}</p>
            </div>
            <span className="text-center font-semibold text-neutral-600">
              {statuses[hiring.status]}
            </span>
            <Link
              className="btn btn-primary"
              href={`/home/offers/${offerId}/hiring/${hiring.id}`}
            >
              Ver petición
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        )
      })}
    </section>
  )
}
