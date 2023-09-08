import { type Team, type Membership, type Person } from '@prisma/client'
import { EyeIcon } from '@heroicons/react/24/outline'
import AddMembersTab from './AddMembersTab'
import TeamGroupTabs from './TeamGroupTabs'
import MembersTab from './MembersTab'
import { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal'
import Member from './Member'

interface Props {
  id: string
  team: Team & {
    memberships: Array<Membership & {
      person: Person | null
    }>
  }
  isOwner: boolean
  memberships: Array<Membership & {
    person: Person
  }>
  persons: OptionPerson[]
  personsCount: OptionPerson[]
  isMember: boolean
}

export default function TeamGroup({ id, team, isOwner, isMember, memberships, persons, personsCount }: Props) {
  const membershipsCount = memberships?.length ?? 0
  const [tab, setTab] = useState<TeamGroupTab>('members')

  return (
    <div className="flex flex-col">
      <header className="rounded-t-lg bg-neutral p-4 text-neutral-content">
        <h3 className="-mb-1 text-lg font-semibold">Miembros del proyecto:</h3>
      </header>
      <main className="card gap-3 rounded-lg bg-white p-4 shadow-lg">
        <div className="-mt-2 flex flex-col">
          {personsCount.map(person => {
            return (
              <Member key={person.id} name={person.name} email={person.email} action="Show" />
            )
          })}
        </div>
        <Modal
          id="membersModal"
          label={`Ver todos (${membershipsCount})`}
          icon={<ListBulletIcon className="h-5 w-5" />}
          style="DEFAULT"
          color="SECONDARY"
          hover="WHITE"
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
          <Button
            url={`/home/projects/${id}/chat`}
            style="DEFAULT"
            color="NEUTRAL"
            hover="WHITE"
          >
            <EyeIcon className="h-5 w-5" />
            Ver chat
          </Button>}
      </main>
    </div>
  )
}
