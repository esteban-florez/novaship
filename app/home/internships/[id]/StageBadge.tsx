import { STAGE_COLORS } from '@/lib/shared/stage-colors'
import { stages } from '@/lib/translations'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  stage: Stage
  className?: string
}>

export default function StageBadge({ stage, className }: Props) {
  return (
    <span className={clsx('brightness-75', STAGE_COLORS[stage], className)}>
      {stages[stage]}
    </span>
  )
}
