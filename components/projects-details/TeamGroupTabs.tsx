import { UsersIcon } from '@heroicons/react/24/solid'
import NavButton from '../NavButton'
import { type TeamGroupTab } from '@/lib/types'

interface Props {
  tab: TeamGroupTab
  setTab: (tab: TeamGroupTab) => void
}

export default function TeamGroupTabs({ tab, setTab }: Props) {
  return (
    <div className="flex flex-col sm:flex-row">
      <NavButton
        isActive={tab === 'members'}
        icon={<UsersIcon className="h-5 w-5" />}
        onClick={() => { setTab('members') }}
      >
        Miembros actuales
      </NavButton>
      <NavButton
        isActive={tab === 'add'}
        icon={<UsersIcon className="h-5 w-5" />}
        onClick={() => { setTab('add') }}
      >
        Añadir miembros
      </NavButton>
    </div>
  )
}
