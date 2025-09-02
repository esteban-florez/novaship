import { STAGE_BADGES } from '@/lib/shared/stage-colors'
import { taskStatuses } from '@/lib/translations'
import { type TaskStatus } from '@prisma/client'
import clsx from 'clsx'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  taskId: string
  title: string
  description: string
  match: boolean
  status: TaskStatus
  url: string
  filter: string
}>

export default function TaskItem({
  taskId,
  title,
  description,
  match,
  status,
  url,
  filter,
}: Props) {
  return (
    <Link
      href={{
        pathname: url,
        query: { id: taskId, action: 'show', filtered: filter },
      }}
    >
      <div
        className={clsx(
          'group p-4 text-sm hover:bg-primary delay-75 duration-75 transition-colors ease-in-out',
          match && 'bg-primary'
        )}
      >
        <h6
          className={clsx(
            '-mb-1 group-hover:text-white font-semibold line-clamp-1',
            match && 'text-white font-bold'
          )}
        >
          {title}
        </h6>
        <small
          className={clsx(
            'badge badge-sm badge-outline group-hover:bg-white',
            match && 'bg-white',
            STAGE_BADGES[status]
          )}
        >
          {taskStatuses[status]}
        </small>
        <p
          className={clsx(
            'mt-1 group-hover:text-neutral-200 line-clamp-2 leading-none',
            match && 'font-semibold text-neutral-200',
            !match && 'text-neutral-600'
          )}
        >
          {description}
        </p>
      </div>
    </Link>
  )
}
