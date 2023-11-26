import AvatarIcon from '@/components/AvatarIcon'
import { ci } from '@/lib/utils/text'
import { type Person } from '@prisma/client'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  persons: Array<Pick<Person, 'id' | 'name' | 'ci' | 'image'>>
}>

export default function PersonsList({ persons }: Props) {
  return (
    persons.map(person => (
      <div key={person.id} className="flex flex-col items-center justify-center gap-1 rounded-lg border-l-4 border-l-primary bg-white p-2 shadow-md md:flex-row md:justify-between">
        <div className="flex gap-2">
          <AvatarIcon image={person.image} className="h-12 w-12" />
          <div>
            <h3 className="mb-0 text-xl font-bold">{person.name}</h3>
            <p>CI: {ci(person.ci)}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            className="btn btn-primary"
            href={`/home/internships/create?person=${person.id}`}
          >
            Inscribir
          </Link>
          <button
            className="btn btn-secondary"
            // TODO -> profile link
            // href={`/home/persons/${person.id}`}
          >
            Perfil
          </button>
        </div>
      </div>
    ))
  )
}
