import InfoUser from '@/components/offers-details/InfoUser'
import { type Location, type Person } from '@prisma/client'

type Props = React.PropsWithChildren<{
  person: Person & {
    location: Location
  }
  page: 'create' | 'update'
}>

const text = {
  create: 'a inscribir:',
  update: 'de la pasantía:',
} as const

export default function PersonCard({ person, page }: Props) {
  return (
    <div className="flex flex-col rounded-lg bg-white p-3 shadow-md lg:w-1/3">
      <h3 className="mb-4 rounded-lg text-center text-xl font-bold tracking-tight text-primary">
        Estudiante {text[page]}
      </h3>
      <InfoUser
        image={person.image}
        owner={person.name}
        description={person.description}
        location={person.location.title}
        verification={false}
      />
      <button
        className="btn btn-secondary"
        // TODO -> profile link
        // href={`/home/persons/${person.id}`}
      >
        Ver perfil
      </button>
    </div>
  )
}
