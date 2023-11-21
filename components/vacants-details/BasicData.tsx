import { type VacantWithRelations } from '@/lib/types'
import IconData from '../IconData'
import { format } from '@/lib/utils/date'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'
import { getVacantExpiration } from '@/lib/utils/tables'

type Props = React.PropsWithChildren<{
  vacant: VacantWithRelations
}>

export default function BasicData({ vacant }: Props) {
  const { job, location, description, createdAt } = vacant
  const expiresAt = getVacantExpiration(vacant)

  return (
    <>
      <h2 className="text-primary font-bold tracking-tighter text-2xl leading-tight">
        {job.title}
      </h2>
      <p className="-mt-2 text-neutral-600 font-semibold text-lg line-clamp-1">
        {location.title}
      </p>
      <p className="py-3">{description}</p>
      <div className="flex justify-between gap-3 p-3">
        <IconData
          label="Fecha de publicación"
          data={format(createdAt)}
          icon={CalendarIcon}
        />
        <IconData
          label="Fecha de expiración"
          data={format(expiresAt)}
          icon={ClockIcon}
        />
      </div>
    </>
  )
}
