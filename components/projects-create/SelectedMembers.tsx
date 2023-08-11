import { type PersonOption } from '@/lib/types'
import Button from '../Button'
import { XMarkIcon } from '@heroicons/react/24/solid'

type Props = React.PropsWithChildren<{
  selectedPersons: PersonOption[]
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
          return (
            <div key={person.id} className="flex w-full justify-between rounded-sm border px-4 py-1 transition-colors delay-150 duration-150 first:rounded-t-md last:rounded-b-md hover:border-primary">
              <div className="flex-col">
                <h6>{person.name}</h6>
                <p>{person.email}</p>
              </div>
              <Button icon={<XMarkIcon className="h-5 w-5" />} style="ICON" color="ERROR" onClick={() => { removePerson(person.id) }} />
            </div>
          )
        })}
      </div>
    </>
  )
}
