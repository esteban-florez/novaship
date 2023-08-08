import { ListBulletIcon, PlusIcon, StarIcon } from '@heroicons/react/24/outline'
import NavButton from '../NavButton'
import Button from '../Button'
import FilterModal from './FilterModal'
import { type TabProp, type InputOnChange } from '@/lib/types'

import Input from '../forms/inputs/Input'
import clsx from 'clsx'
import { BUTTON_DEFAULT } from '@/lib/constants/button'

interface Props {
  active: TabProp
  onChange: (event: InputOnChange) => void
}

export default function Filter({ active, onChange }: Props) {
  return (
    <section className="mt-5 flex w-full flex-col flex-wrap gap-2 rounded-lg xl:flex-row xl:items-center">
      <div className="mb-3 flex w-full flex-col items-center justify-between gap-3 sm:ms-auto sm:flex-row sm:pb-3">
        <div className="flex w-full items-center justify-center sm:w-auto">
          <Input name="title" placeholder="Buscar..." onChange={onChange} className="mb-0 rounded-md border border-neutral-400 bg-neutral-100 px-4 py-2 shadow-inner" />
        </div>
        <div className="flex w-full flex-row justify-between gap-2 pb-2 sm:w-auto sm:pb-0">
          <FilterModal onChange={onChange} />
          <Button url="/home/projects/create" icon={<PlusIcon className="h-5 w-5" />} className={clsx(BUTTON_DEFAULT, 'bg-primary text-primary-content')}>
            Agregar
          </Button>
        </div>
      </div>
      <div className="flex">
        <NavButton isActive={active === 'All'} icon={<ListBulletIcon className="h-6 w-6" />}>
          Todos
        </NavButton>
        <NavButton isActive={active === 'Mine'} icon={<StarIcon className="h-6 w-6" />}>
          Mis proyectos
        </NavButton>
      </div>
    </section>
  )
}
