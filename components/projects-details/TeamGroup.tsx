'use client'

import { ListBulletIcon } from '@heroicons/react/24/solid'
import { type Membership, type Person } from '@prisma/client'
import Button from '../Button'
import { EyeIcon } from '@heroicons/react/24/outline'
import Modal from '../Modal'
import { useState } from 'react'
import { type TeamGroupTab, type OptionPerson } from '@/lib/types'
import MembersTab from './MembersTab'
import TeamGroupTabs from './TeamGroupTabs'
import AddMembersTab from './AddMembersTab'

interface Props {
  id: string
  memberships: Array<Membership & {
    person: Person
  }>
  isOwner: boolean
  persons: OptionPerson[]
}

export default function TeamGroup({ id, memberships, isOwner, persons }: Props) {
  const membershipsCount = memberships?.length ?? 0
  const [tab, setTab] = useState<TeamGroupTab>('members')

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
          <article className="flex h-80 flex-col">
            {isOwner && <TeamGroupTabs tab={tab} setTab={setTab} />}
            {tab === 'members' &&
              <MembersTab
                projectId={id}
                memberships={memberships}
                isOwner={isOwner}
              />}
            {tab === 'add' &&
              <AddMembersTab
                projectId={id}
                persons={persons}
              />}
          </article>
        </Modal>
        {isOwner &&
          <Button url={`/home/projects/${id}/chat`} style="OUTLINE" color="ACCENT" hover="ACCENT">
            <EyeIcon className="h-5 w-5" />
            Ver chat
          </Button>}
      </main>
    </>
  )
}
