import { type SelectablePerson } from '@/lib/types'
import Member from '../projects-details/Member'

type Props = React.PropsWithChildren<{
  selectedPersons: SelectablePerson[]
  removePerson: (id: string) => void
}>

export default function SelectedMembers({ selectedPersons, removePerson }: Props) {
  return (
    <>
      <h5 className="mt-5 font-semibold">
        {selectedPersons.length > 0 ? `Miembros seleccionados (${selectedPersons.length})` : 'Seleccione algún usuario.'}
      </h5>
      <div className="mt-2 block max-h-60 w-full gap-2 overflow-y-auto">
        {selectedPersons.map(person => {
          return <Member key={person.id} name={person.name} email={person.email} action="Remove" onClick={() => { removePerson(person.id) }} />
        })}
      </div>
    </>
  )
}
