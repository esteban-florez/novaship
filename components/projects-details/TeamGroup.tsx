import { ListBulletIcon } from '@heroicons/react/24/solid'
import Member from './Member'
import { type Membership, type Person } from '@prisma/client'
import Button from '../Button'
import { EyeIcon } from '@heroicons/react/24/outline'
import Modal from '../Modal'
import Select from '../forms/inputs/Select'
import { BUTTON_OUTLINE } from '@/lib/constants/button'
import clsx from 'clsx'

interface Props {
  memberships: Array<Membership & {
    person: Person
  }>
}

export default function TeamGroup({ memberships }: Props) {
  return (
    <div>
      <header className="flex items-center justify-center rounded-t-lg bg-accent px-4 py-2 text-accent-content">
        <h4 className="text-center text-xl font-bold sm:text-xl">Equipo de trabajo</h4>
      </header>
      <main className="flex flex-col gap-3 rounded-b-lg bg-white p-4">
        {memberships.map(member => {
          return <Member key={member.id} name={member.person.name} />
        })}
        <Modal
          id="membersModal"
          buttonText={`Miembros (${memberships.length})`}
          buttonIcon={<ListBulletIcon className="h-5 w-5" />}
          buttonClassName={clsx(BUTTON_OUTLINE, 'text-accent-content hover:bg-accent')}
          buttonCancelText="Cancelar"
        >
          <article>
            <Select name="members" label="Añadir miembros">
              <option value="">Pepe</option>
              <option value="">Ana</option>
              <option value="">Luis</option>
              <option value="">Pepe</option>
            </Select>
            {memberships.map(member => {
              return <div key={member.id}>{member.person.name}</div>
            })}
          </article>
        </Modal>
        <Button icon={<EyeIcon className="h-5 w-5" />} className={clsx(BUTTON_OUTLINE, 'text-accent-content hover:bg-accent')}>Ver chat</Button>
      </main>
    </div>
  )
}
