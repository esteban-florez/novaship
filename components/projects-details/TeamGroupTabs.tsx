import { UserPlusIcon, UsersIcon } from '@heroicons/react/24/solid'
import { type TeamGroupTab } from '@/lib/types'
import Button from '../Button'

interface Props {
  tab: TeamGroupTab
  setTab: (tab: TeamGroupTab) => void
}

export default function TeamGroupTabs({ tab, setTab }: Props) {
  return (
    <div className="flex flex-col sm:flex-row">
      <Button
        icon={<UsersIcon className="h-5 w-5" />}
        style="TAB"
        color={tab === 'members' ? 'PRIMARY' : 'WHITE'}
        hover={tab === 'members' ? 'PRIMARY' : 'WHITE'}
        onClick={() => { setTab('members') }}
      >
        Miembros actuales
      </Button>
      <Button
        icon={<UserPlusIcon className="h-5 w-5" />}
        style="TAB"
        color={tab === 'add' ? 'PRIMARY' : 'WHITE'}
        hover={tab === 'add' ? 'PRIMARY' : 'WHITE'}
        onClick={() => { setTab('add') }}
      >
        Añadir miembros
      </Button>
    </div>
  )
}
