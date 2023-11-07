import { type VacantWithRelations } from '@/lib/types'
import { getAcceptedRecruitments, vacantIsExpired, vacantIsFull } from '@/lib/utils/tables'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

type Props = React.PropsWithChildren<{
  vacant: VacantWithRelations
}>

export default function VacantStatus({ vacant }: Props) {
  const { length: acceptedCount } = getAcceptedRecruitments(vacant)
  const isFull = vacantIsFull(vacant)
  const isExpired = vacantIsExpired(vacant)

  const texts = {
    available: `Se han aceptado ${acceptedCount}/${vacant.limit} pasantes. El cupo aún está disponible.`,
    full: `Se ha llegado al límite de pasantes del cupo (${vacant.limit} pasantes) y se encuentra oculto.`,
    expired: 'Este cupo para pasantes ha expirado y se encuentra oculto.',
  } as const

  return (
    <div className="alert mb-2">
      <InformationCircleIcon className="h-5 w-5" />
      <p>
        {isExpired ? texts.expired : isFull ? texts.full : texts.available}
      </p>
    </div>
  )
}
