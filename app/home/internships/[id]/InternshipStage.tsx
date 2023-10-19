import { InformationCircleIcon } from '@heroicons/react/24/outline'
import StageBadge from './StageBadge'
import { STAGE_ALERTS } from '@/lib/shared/stage-colors'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  stage: Stage
}>

const stagesText = {
  PENDING: 'La solicitud de pasantía fué enviada, esperando confirmación del estudiante.',
  REJECTED: 'La solicitud de pasantía fué rechazada por el estudiante.',
  ACCEPTED: 'La pasantía fué aceptada por el estudiante y está en búsqueda de empresa.',
  ACTIVE: 'La pasantía está actualmente en progreso.',
  COMPLETED: 'Las horas totales de la pasantía fueron completadas.',
}

export default function InternshipStage({ stage }: Props) {
  return (
    <>
      <h3 className="font-bold tracking-tighter text-2xl">
        Estado de la pasantía: <StageBadge stage={stage} />
      </h3>
      <div className={clsx('alert mt-2', STAGE_ALERTS[stage])}>
        <InformationCircleIcon className="h-6 w-6" />
        <p>
          {stagesText[stage]}
        </p>
      </div>
    </>
  )
}
