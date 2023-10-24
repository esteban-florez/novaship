import AvatarIcon from '@/components/AvatarIcon'
import clsx from 'clsx'

interface Props {
  participations: Array<{
    id: string
    name: string
    image: string | null
  }>
}

export default function Participations({ participations }: Props) {
  const hasParticipations = participations.length > 0
  return (
    <>
      <h6 className={clsx('font-semibold', !hasParticipations && '-mb-2')}>
        Participantes
      </h6>
      {!hasParticipations && (
        <small className="text-neutral-600 font-semibold">
          No hay participantes registrados.
        </small>
      )}
      {hasParticipations && (
        <ul>
          {participations.map((participation) => {
            return (
              <li
                key={participation.id}
                className="tooltip"
                data-tip={participation.name}
              >
                <AvatarIcon image={participation.image} />
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
