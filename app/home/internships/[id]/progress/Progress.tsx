import { format } from '@/lib/utils/date'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import { type Progress as ProgressModel } from '@prisma/client'
import StatusDot from '../../recruitments/StatusDot'
import { progressStatuses as translation } from '@/lib/translations'
import UpdateStatus from './UpdateStatus'

type Props = React.PropsWithChildren<{
  progress: ProgressModel
  withActions: boolean
}>

export default function Progress({ progress, withActions }: Props) {
  const { hours, description, title, endsAt, startsAt, status } = progress
  const s = hours > 1 ? 's' : ''

  return (
    <li className="ms-6 bg-neutral-100 rounded-lg p-4 shadow-md">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -start-4 ring-8 ring-white">
        <CheckBadgeIcon className="h-6 w-6 stroke-2 text-white" />
      </span>
      <h3 className="flex items-center justify-between mb-1 text-lg font-semibold">
        <span>{title} - {hours} hora{s}</span>
        <p className="bg-white p-2 w-fit flex rounded-lg shadow items-center gap-2 text-sm">
          <StatusDot status={status} />
          {translation[status]}
        </p>
      </h3>
      <time className="block mb-2 text-sm leading-none font-semibold text-neutral-600">
        Fecha de inicio: {format(startsAt)}
      </time>
      <time className="block mb-2 text-sm leading-none font-semibold text-neutral-600">
        Fecha de finalización: {format(endsAt)}
      </time>
      <p className="text-base font-normal mt-4">{description}</p>
      {withActions && status === 'PENDING' && (
        <div className="flex gap-1 mt-2">
          {(['ACCEPTED', 'REJECTED'] as const).map(status => (
            <UpdateStatus key={status} status={status} progressId={progress.id} />
          ))}
        </div>
      )}
    </li>
  )
}
