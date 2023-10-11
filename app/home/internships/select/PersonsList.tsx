import AvatarIcon from '@/components/AvatarIcon'
import Button from '@/components/Button'
import { type Person } from '@prisma/client'

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
            <p>CI: {person.ci}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            color="PRIMARY"
            url={`/home/internships/create?person=${person.id}`}
          >
            Inscribir
          </Button>
          <Button
            color="SECONDARY"
            url={`/home/persons/${person.id}`}
          >
            Perfil
          </Button>
        </div>
      </div>
    ))
  )
}
