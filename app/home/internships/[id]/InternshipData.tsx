import { format } from '@/lib/utils/date'

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

export default function InternshipData({ grade, internship, institute, recruitment }: Props) {
  return (
    <div className="mt-4">
      {grade !== undefined && (
        <p>
          Carrera de la pasantía:
          <span className="font-bold">
            {' ' + grade.title}
          </span>
        </p>
      )}
      {recruitment === undefined
        ? (
          <p>
            Fecha:
            <span className="font-bold">
              {' ' + format(internship.createdAt)}
            </span>
          </p>
          )
        : (
          <>
            <p>
              Fecha de inicio:
              <span className="font-bold">
                {' ' + format(recruitment.startsAt as Date)}
              </span>
            </p>
            <p>
              Fecha de finalización:
              <span className="font-bold">
                {' ' + format(recruitment.endsAt as Date)}
              </span>
            </p>
          </>
          )}
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
            <span
              className="underline text-secondary"
              // TODO -> profile link
              // href={`/home/profile/${institute.id}`}
            >
              {institute.name}
            </span>
          </span>
        </p>
      )}
    </div>
  )
}
