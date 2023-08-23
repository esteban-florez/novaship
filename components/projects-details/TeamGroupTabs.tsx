import { UserPlusIcon, UsersIcon } from '@heroicons/react/24/solid'
import { type TeamGroupTab } from '@/lib/types'
import Button from '../modal/Button'
import clsx from 'clsx'

interface Props {
  tab: TeamGroupTab
  setTab: (tab: TeamGroupTab) => void
}

export default function TeamGroupTabs({ tab, setTab }: Props) {
  return (
    <div className={clsx(tab === 'add' && 'mb-4', 'join')}>
      <Button
        className={clsx({
          'btn btn-sm sm:btn-md join-item w-2/4': true,
          'btn-primary': tab === 'members',
          'btn-ghost border border-neutral-400': tab === 'add',
        })} onClick={() => { setTab('members') }}
      >
        <UsersIcon className="h-5 w-5" />
        Actuales
      </Button>
      <Button
        className={clsx({
          'btn btn-sm sm:btn-md join-item w-2/4': true,
          'btn-primary': tab === 'add',
          'btn-ghost border border-neutral-400': tab === 'members',
        })} onClick={() => { setTab('add') }}
      >
        <UserPlusIcon className="h-5 w-5" />
        Añadir
      </Button>
    </div>
  )
}
