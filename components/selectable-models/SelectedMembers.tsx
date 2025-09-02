import { type SelectablePerson } from '@/lib/types'
import Member from '../projects-details/Member'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  selectedPersons: SelectablePerson[]
  removePerson: (id: string) => void
}>

export default function SelectedMembers({ selectedPersons, removePerson }: Props) {
  return (
    <div className="mt-2 flex-col gap-x-1 gap-y-2">
      <h5 className={clsx('font-semibold', selectedPersons.length === 0 ? 'text-neutral-400' : '')}>
        {selectedPersons.length > 0 ? `Miembros seleccionados (${selectedPersons.length})` : 'Ningún usuario seleccionado.'}
      </h5>
      <div className="mt-2 block max-h-60 w-full gap-2 overflow-y-auto">
        {selectedPersons.map(person => {
          return <Member key={person.id} name={person.name} email={person.email} action="Remove" onClick={() => { removePerson(person.id) }} />
        })}
      </div>
    </div>
  )
}
