import { PlusIcon } from '@heroicons/react/24/outline'
import SearchInput from '../SearchInput'
import NavButton from '../NavButton'
import Button from '../Button'
import FilterModal from './FilterModal'

export default function Filter() {
  return (
    <section className="mt-5 flex w-full flex-col flex-wrap gap-2 rounded-lg xl:flex-row xl:items-center">
      <div className="order-2 gap-x-2 xl:order-none">
        <NavButton isActive url="">
          Mis proyectos
        </NavButton>
        <NavButton url="">
          Todos
        </NavButton>
      </div>
      <div className="order-1 flex w-full flex-col items-center justify-between gap-3 sm:ms-auto sm:flex-row sm:pb-3 xl:w-auto">
        <SearchInput />
        <div className="flex w-full flex-row justify-between gap-2 pb-2 sm:w-auto sm:pb-0">
          <FilterModal />
          <Button url="/home/projects/create" bgColor="bg-primary" textColor="text-primary-content" icon={<PlusIcon className="h-5 w-5" />}>
            Agregar
          </Button>
        </div>
      </div>
    </section>
  )
}
