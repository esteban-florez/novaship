import StageBadge from '@/app/home/internships/[id]/StageBadge'
import { STAGE_COLORS, STAGE_PROGRESS } from '@/lib/shared/stage-colors'
import { type InternshipWithRelations } from '@/lib/types'
import { getCompletedHours } from '@/lib/utils/tables'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  stage: Stage
  internship: InternshipWithRelations
}>

export default function InternshipProgress({ stage, internship }: Props) {
  const { hours } = internship
  const completed = getCompletedHours(internship)
  const real = completed !== 0

  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold">
        Estado: <StageBadge stage={stage} className="font-bold" />
      </p>
      <progress
        className={clsx('progress w-full h-3', STAGE_PROGRESS[stage])}
        value={real ? completed : 5}
        max={real ? hours : 100}
      />
      <p className="font-semibold">
        Progreso:{' '}
        <span className={clsx('brightness-75 font-bold', STAGE_COLORS[stage])}>
          {completed}/{hours} horas.
        </span>
      </p>
    </div>
  )
}
