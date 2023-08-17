import { ListBulletIcon, PlusIcon, StarIcon } from '@heroicons/react/24/outline'
import Button from '../Button'
import FilterModal from './FilterModal'
import { type TabProp } from '@/lib/types'

import Input from '../forms/inputs/Input'

interface Props {
  active: TabProp
  onInput: (event: OnInputEvent | SelectOnInputEvent) => void
  onTabClick: (tabOption?: TabProp) => void
}

// DRY Filter
export default function Filter({ active, onInput, onTabClick }: Props) {
  return (
    <section className="mt-5 flex w-full flex-col flex-wrap gap-2 rounded-lg xl:flex-row xl:items-center">
      <div className="mb-3 flex w-full flex-col items-center justify-between gap-3 sm:ms-auto sm:flex-row sm:pb-3">
        <div className="flex w-full items-center justify-center sm:w-auto">
          <Input name="title" placeholder="Buscar..." onInput={onInput} className="mb-0 rounded-md border border-neutral-400 bg-neutral-100 px-4 py-2 shadow-inner" />
        </div>
        <div className="flex w-full flex-row justify-between gap-2 pb-2 sm:w-auto sm:pb-0">
          <FilterModal onInput={onInput} />
          <Button url="/home/projects/create" icon={<PlusIcon className="h-5 w-5" />} style="DEFAULT" color="PRIMARY" hover="PRIMARY">
            Agregar
          </Button>
        </div>
      </div>
      <div className="flex text-sm sm:text-base">
        <Button
          icon={<ListBulletIcon className="h-6 w-6" />}
          style="TAB"
          color={active === 'All' ? 'PRIMARY' : 'WHITE'}
          hover={active === 'All' ? 'PRIMARY' : 'WHITE'}
          onClick={() => { onTabClick('All') }}
        >
          Todos
        </Button>
        <Button
          icon={<StarIcon className="h-6 w-6" />}
          style="TAB"
          color={active === 'Mine' ? 'PRIMARY' : 'WHITE'}
          hover={active === 'Mine' ? 'PRIMARY' : 'WHITE'}
          onClick={() => { onTabClick('Mine') }}
        >
          Mis proyectos
        </Button>
      </div>
    </section>
  )
}
