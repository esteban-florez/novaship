'use client'

import { ListBulletIcon } from '@heroicons/react/24/solid'
import { type Membership, type Person } from '@prisma/client'
import Button from '../Button'
import { EyeIcon } from '@heroicons/react/24/outline'
import Modal from '../Modal'
import { useState } from 'react'
import { type TeamGroupTab, type PersonOption } from '@/lib/types'
import MembersTab from './MembersTab'
import TeamGroupTabs from './TeamGroupTabs'
import AddMembersTab from './AddMembersTab'

interface Props {
  id: string
  memberships: Array<Membership & {
    person: Person | null
  }> | undefined
  isOwner: boolean
  persons: PersonOption[]
}

export default function TeamGroup({ id, memberships, isOwner, persons }: Props) {
  // DRY
  const membershipsCount = memberships?.length ?? 0
  const [totalPersons, setTotalPersons] = useState<PersonOption[]>(persons)
  const [inputFocus, setInputFocus] = useState(false)
  const [searchName, setSearchName] = useState('')
  const [tab, setTab] = useState<TeamGroupTab>('members')

  const selectedPersons = totalPersons.filter(person => person.selected)
  const availablePersons = totalPersons.filter(person => !person.selected)

  return (
    <>
      <header className="flex items-center justify-center rounded-t-lg bg-accent px-4 py-2 text-accent-content">
        <h4 className="text-center text-xl font-bold sm:text-xl">Equipo de trabajo</h4>
      </header>
      <main className="flex flex-col gap-3 rounded-b-lg bg-white p-4">
        <Modal
          id="membersModal"
          label={`Miembros (${membershipsCount})`}
          icon={<ListBulletIcon className="h-5 w-5" />}
          style="OUTLINE"
          color="ACCENT"
          hover="ACCENT"
          cancelLabel="Cerrar"
        >
          <article className="flex flex-col">
            <h2 className="text-2xl font-bold text-primary">Miembros</h2>

            {isOwner && <TeamGroupTabs tab={tab} setTab={setTab} />}
            {tab === 'members' && <MembersTab memberships={memberships} />}
            {tab === 'add' &&
              <AddMembersTab
                id={id}
                selectedPersons={selectedPersons}
                availablePersons={availablePersons}
                totalPersons={totalPersons}
                inputFocus={inputFocus}
                searchName={searchName}
                setTotalPersons={setTotalPersons}
                setInputFocus={setInputFocus}
                setSearchName={setSearchName}
              />}
          </article>
        </Modal>
        <Button url={`/home/projects/${id}/chat`} icon={<EyeIcon className="h-5 w-5" />} style="OUTLINE" color="ACCENT" hover="ACCENT" width="w-full">Ver chat</Button>
      </main>
    </>
  )
}
