'use client'

import { ListBulletIcon } from '@heroicons/react/24/solid'
import { type Membership, type Person } from '@prisma/client'
import Button from '../Button'
import { EyeIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import Modal from '../Modal'
import Member from './Member'
import Input from '../forms/inputs/Input'
import clsx from 'clsx'
import { useState } from 'react'
import { type InputOnChange, type PersonOption } from '@/lib/types'
import SelectedMembers from '../projects-create/SelectedMembers'
import useSubmit from '@/lib/hooks/useSubmit'
import Divider from '../Divider'
import { type Fields, schema } from '@/lib/validation/schemas/persons'

interface Props {
  id: string
  memberships: Array<Membership & {
    person: Person
  }>
  isOwner: boolean
  persons: PersonOption[]
}

export default function TeamGroup({ id, memberships, isOwner, persons }: Props) {
  // DRY
  // TODO -> añadir y remover miembros
  const [totalPersons, setTotalPersons] = useState<PersonOption[]>(persons)
  const [inputFocus, setInputFocus] = useState(false)
  const [searchName, setSearchName] = useState('')

  const selectedPersons = totalPersons.filter(person => person.selected)
  const availablePersons = totalPersons.filter(person => !person.selected)

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

  function handleInputChange(event: InputOnChange) {
    const { value } = event.target
    setInputFocus(value.length > 0)
    setSearchName(value)
  }

  const {
    handleSubmit, alert,
  } = useSubmit<Fields>({
    schema,
    method: 'PUT',
    append: {
      selectedPersons,
    },
  })

  return (
    <>
      <header className="flex items-center justify-center rounded-t-lg bg-accent px-4 py-2 text-accent-content">
        <h4 className="text-center text-xl font-bold sm:text-xl">Equipo de trabajo</h4>
      </header>
      <main className="flex flex-col gap-3 rounded-b-lg bg-white p-4">
        <Modal
          id="membersModal"
          label={`Miembros (${memberships.length})`}
          icon={<ListBulletIcon className="h-5 w-5" />}
          style="OUTLINE"
          color="ACCENT"
          hover="ACCENT"
          cancelLabel="Cerrar"
        >
          <article className="flex flex-col">
            <h2 className="mb-2 border-b text-xl font-bold uppercase text-primary">Miembros</h2>

            {isOwner &&
              <form action={`/api/projects/${id}`} onSubmit={handleSubmit} method="POST">
                {alert}
                <Input name="members" label="Invitar" placeholder="Ej: José Pérez o josezz@gmail.com" onChange={handleInputChange} />
                <div className={clsx({
                  'mt-3 w-full max-h-60 gap-2 overflow-y-auto': true,
                  block: inputFocus,
                  hidden: !inputFocus,
                })}
                >
                  {inputFocus && availablePersons.map(person => {
                    if (searchName === '' || Boolean(person.name.toLowerCase().includes(searchName.toLowerCase()))) {
                      return (
                        <div key={person.id} className="w-full cursor-pointer border px-4 py-1 transition-colors delay-150 duration-150 first:rounded-t-md last:rounded-b-md hover:border-primary" onClick={() => { addPerson(person.id) }}>
                          <h6>{person.name}</h6>
                          <p>{person.email}</p>
                        </div>
                      )
                    }

                    return null
                  })}
                </div>
                <SelectedMembers selectedPersons={selectedPersons} removePerson={removePerson} />
                <div className="mt-2 flex flex-col">
                  <Button style={selectedPersons.length === 0 ? 'DISABLED' : 'DEFAULT'} color="PRIMARY" icon={<UserPlusIcon className="h-5 w-5" />} isDisabled={selectedPersons.length === 0}>Añadir</Button>
                </div>
              </form>}

            <Divider />

            {isOwner && <h5 className="text-lg font-semibold">Miembros actuales</h5>}

            {memberships.map(member => {
              return <Member key={member.id} name={member.person.name} />
            })}
          </article>
        </Modal>
        <Button url={`/home/projects/${id}/chat`} icon={<EyeIcon className="h-5 w-5" />} style="OUTLINE" color="ACCENT" hover="ACCENT" width="w-full">Ver chat</Button>
      </main>
    </>
  )
}
