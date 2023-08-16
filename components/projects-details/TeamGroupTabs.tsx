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
        onClick={() => { setTab('members') }}
      >
        Miembros actuales
      </NavButton>
      <NavButton
        isActive={tab === 'add'}
        onClick={() => { setTab('add') }}
      >
        Añadir miembros
      </NavButton>
    </div>
  )
}
