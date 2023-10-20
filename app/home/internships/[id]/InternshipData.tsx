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
  institute?: {
    id: string
    name: string
  }
}>

export default function InternshipData({ grade, internship, institute }: Props) {
  return (
    <div className="mt-4 text-lg">
      {grade !== undefined && (
        <p>
          Carrera de la pasantía:
          <span className="font-bold">
            {' ' + grade.title}
          </span>
        </p>
      )}
      <p>
        Fecha:
        <span className="font-bold">
          {' ' + format(internship.createdAt)}
        </span>
      </p>
      <p>
        Horas totales:
        <span className="font-bold">
          {` ${internship.hours} horas`}
        </span>
      </p>
      {institute !== undefined && (
        <p>
          Universidad:{' '}
          <span className="font-bold">
            <Link
              className="underline text-secondary"
              href={`/home/profile/${institute.id}`}
            >
              {institute.name}
            </Link>
          </span>
        </p>
      )}
    </div>
  )
}
