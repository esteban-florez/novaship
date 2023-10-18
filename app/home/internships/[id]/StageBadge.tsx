import { stages } from '@/lib/translations'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  stage: Stage
  className?: string
}>

export default function StageBadge({ stage, className }: Props) {
  const colors = {
    PENDING: 'text-warning brightness-90',
    REJECTED: 'text-error',
    ACCEPTED: 'text-success',
    ACTIVE: 'text-warning brightness-90',
    COMPLETED: 'text-success',
  }

  return (
    <span className={clsx(colors[stage], className)}>
      {stages[stage]}
    </span>
  )
}
