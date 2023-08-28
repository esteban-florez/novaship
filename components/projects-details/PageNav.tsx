import { ListBulletIcon, PlusIcon, StarIcon } from '@heroicons/react/24/outline'
import { type TabProp } from '@/lib/types'
import Input from '../forms/inputs/Input'
import Button from '../Button'

// DRY Filter
interface Props {
  active: TabProp
  onInput?: (event: OnInputEvent | SelectOnInputEvent) => void
  onTabClick: (tabOption?: TabProp) => void
}

export default function PageNav({ active, onInput, onTabClick }: Props) {
  const tabButtons = [
    {
      title: 'Todos',
      icon: <ListBulletIcon className="h-6 w-6" />,
    },
    {
      title: 'Mis proyectos',
      icon: <StarIcon className="h-6 w-6" />,
    },
  ]

  return (
    <div className="flex w-full columns-1 flex-col items-start justify-between gap-4 py-3 lg:columns-2 lg:flex-row lg:items-center lg:gap-0">
      <div className="order-2 flex w-full gap-x-2 lg:order-1">
        {tabButtons.map((tabs) => {
          const { title, icon } = tabs
          return (
            <Button
              key={title}
              style="TAB"
              color={active === `${title}` ? 'PRIMARY' : 'WHITE'}
              hover={active === `${title}` ? 'PRIMARY' : undefined}
              onClick={() => { onTabClick('All') }}
            >
              {icon}
              <p className="text-base">{title}</p>
            </Button>
          )
        })}
      </div>
      <div className="order-1 flex w-full flex-row items-center justify-between gap-3 lg:order-2 lg:place-items-center lg:justify-end xl:w-auto">
        <Input name="title" placeholder="Buscar..." onInput={onInput} className="my-3 h-10 w-full rounded-md border border-neutral-400 bg-white shadow-inner" />
        <Button
          url="/home/projects/create"
          style="DEFAULT"
          color="PRIMARY"
          hover="WHITE"
        >
          <PlusIcon className="h-6 w-6" />
          <p className="text-base">Agregar</p>
        </Button>
      </div>
    </div>
  )
}
