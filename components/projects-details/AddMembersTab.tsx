import useSubmit from '@/lib/hooks/useSubmit'
import { type SelectablePerson } from '@/lib/types'
import { type Fields, schema } from '@/lib/validation/schemas/persons'
import Input from '../forms/inputs/Input'
import SelectedMembers from '../projects-create/SelectedMembers'
import Button from '../Button'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import Member from './Member'

interface Props {
  id: string
  selectedPersons: SelectablePerson[]
  availablePersons: SelectablePerson[]
  totalPersons: SelectablePerson[]
  inputFocus: boolean
  searchName: string
  setTotalPersons: (totalPersons: SelectablePerson[]) => void
  setInputFocus: (value: boolean) => void
  setSearchName: (search: string) => void
}

// TODO -> añadir y remover miembros
export default function AddMembersTab({
  id,
  selectedPersons,
  availablePersons,
  totalPersons,
  inputFocus,
  searchName,
  setTotalPersons,
  setInputFocus,
  setSearchName,
}: Props) {
  function addPerson(id: string) {
    const newPersons = totalPersons.map(person => {
      if (person.id !== id) return person

      return {
        ...person,
        selected: true,
      }
    })

    setTotalPersons(newPersons)
  }

  function removePerson(id: string) {
    const newPersons = totalPersons.map(person => {
      if (person.id !== id) return person

      return {
        ...person,
        selected: false,
      }
    })

    setTotalPersons(newPersons)
  }

  function handleInput(event: OnInputEvent) {
    const { value } = event.target
    setInputFocus(value.length > 0)
    setSearchName(value)
  }

  const {
    handleSubmit, alert, register, serverErrors,
  } = useSubmit<Fields>({
    schema,
    method: 'PUT',
    append: {
      projectId: id,
      selectedPersons,
    },
  })

  return (
    <form action="/api/memberships" onSubmit={handleSubmit} method="POST">
      {alert}
      {serverErrors}
      <Input name="id" label="" placeholder="" value={id} register={register} className="hidden" />
      <Input name="test" label="" placeholder="" register={register} className="hidden" />
      <Input name="members" label="Invitar" placeholder="Ej: josezz@gmail.com" register={register} onInput={handleInput} />

      <div className="mt-3 max-h-60 w-full gap-2 overflow-y-auto">
        {inputFocus && availablePersons.map(person => {
          if (searchName === '' || (searchName !== '' && Boolean(person.name.toLowerCase().includes(searchName.toLowerCase())))) {
            return <Member key={person.id} name={person.name} email={person.email} action="Add" onClick={() => { addPerson(person.id) }} />
          }

          return null
        })}
      </div>

      <SelectedMembers selectedPersons={selectedPersons} removePerson={removePerson} />

      <div className="mt-2 flex flex-col">
        <Button
          style={selectedPersons.length === 0 ? 'DISABLED' : 'DEFAULT'}
          color="PRIMARY"
          icon={<UserPlusIcon className="h-5 w-5" />}
          isDisabled={selectedPersons.length === 0}
        >
          Añadir
        </Button>
      </div>
    </form>
  )
}
