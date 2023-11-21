import { diffForHumans, format } from '@/lib/utils/date'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import { type Progress as ProgressModel } from '@prisma/client'

type Props = React.PropsWithChildren<{
  progress: ProgressModel
}>

export default function Progress({ progress }: Props) {
  const { hours, createdAt, description } = progress
  const s = hours > 1 ? 's' : ''

  return (
    <li className="ms-6 bg-neutral-100 rounded-lg p-4 shadow-md">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -start-4 ring-8 ring-white">
        <CheckBadgeIcon className="h-6 w-6 stroke-2 text-white" />
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold">Añadida{s} {progress.hours} hora{s} completada{s}</h3>
      <time className="block mb-2 text-sm leading-none font-semibold text-neutral-600">
        {diffForHumans(createdAt)} - {format(createdAt)}
      </time>
      <p className="text-base font-normal">{description}</p>
    </li>
  )
}
