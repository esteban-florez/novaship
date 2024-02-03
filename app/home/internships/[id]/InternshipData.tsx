import { format } from '@/lib/utils/date'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  grade?: {
    title: string
  }
  internship: {
    hours: number
    createdAt: Date
  }
  recruitment?: {
    startsAt: Date | null
    endsAt: Date | null
  }
  institute?: {
    id: string
    name: string
  }
}>

export default function InternshipData({
  grade,
  internship,
  institute,
  recruitment,
}: Props) {
  return (
    <div className="mt-4">
      {grade !== undefined && (
        <p>
          Carrera de la pasantía:
          <span className="font-bold">{' ' + grade.title}</span>
        </p>
      )}
      {recruitment === undefined
        ? (
          <p>
            Fecha:
            <span className="font-bold">
              {' ' + format({ date: internship.createdAt })}
            </span>
          </p>
          )
        : (
          <>
            <p>
              Fecha de inicio:
              <span className="font-bold">
                {' ' + format({ date: recruitment.startsAt as Date })}
              </span>
            </p>
            <p>
              Fecha de finalización:
              <span className="font-bold">
                {' ' + format({ date: recruitment.endsAt as Date })}
              </span>
            </p>
          </>
          )}
      <p>
        Horas totales:
        <span className="font-bold">{` ${internship.hours} horas`}</span>
      </p>
      {institute !== undefined && (
        <p>
          Universidad:{' '}
          <Link
            href={`/home/institute/${institute.id}`}
            className="font-bold underline text-secondary"
          >
            {institute.name}
          </Link>
        </p>
      )}
    </div>
  )
}
