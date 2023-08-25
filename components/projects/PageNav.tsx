import { ListBulletIcon, PlusIcon, StarIcon } from '@heroicons/react/24/outline'
import Button from '../Button'
import { type TabProp } from '@/lib/types'
import Input from '../forms/inputs/Input'

interface Props {
  active: TabProp
  onInput: (event: OnInputEvent | SelectOnInputEvent) => void
  onTabClick: (tabOption?: TabProp) => void
}

// DRY Filter
export default function PageNav({ active, onInput, onTabClick }: Props) {
  return (
    <div className="flex w-full columns-1 flex-col items-start justify-between gap-4 p-4 lg:columns-2 lg:flex-row lg:items-center lg:gap-0">
      <div className="order-2 flex w-full gap-x-2 lg:order-1">
        <Button
          style="TAB"
          color={active === 'All' ? 'PRIMARY' : 'WHITE'}
          hover={active === 'All' ? 'WHITE' : 'PRIMARY'}
          icon={<ListBulletIcon className="h-6 w-6" />}
          onClick={() => { onTabClick('All') }}
        >
          Todos
        </Button>
        <Button
          style="TAB"
          color={active === 'Mine' ? 'PRIMARY' : 'WHITE'}
          hover={active === 'Mine' ? 'WHITE' : 'PRIMARY'}
          icon={<StarIcon className="h-6 w-6" />}
          onClick={() => { onTabClick('Mine') }}
        >
          Mis proyectos
        </Button>
      </div>
      <div className="order-1 flex w-full flex-row items-center justify-between gap-3 lg:order-2 lg:place-items-center lg:justify-end xl:w-auto">
        <Input name="title" placeholder="Buscar..." onInput={onInput} className="my-3 h-10 w-auto rounded-md border border-neutral-400 bg-white shadow-inner" />
        <Button
          url="/home/projects/create"
          icon={<PlusIcon className="h-6 w-6" />}
          style="DEFAULT"
          color="PRIMARY"
          hover="WHITE"
          width="w-full"
        >
          Agregar
        </Button>
      </div>
    </div>
  )
}
