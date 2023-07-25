import { AdjustmentsHorizontalIcon, PlusIcon } from '@heroicons/react/24/solid'
import NavButton from '@/components/NavButton'
import SearchInput from '@/components/SearchInput'
import ActionButton from '@/components/ActionButton'

export default function Filter() {
  return (
    <>
      <section className="mt-5 flex w-full flex-col flex-wrap gap-2 rounded-lg xl:flex-row xl:items-center">
        <div className="order-2 gap-x-2 xl:order-none">
          <NavButton url="/home/projects/project">
            Archivos
          </NavButton>
          <NavButton url="/home/projects/tasks" isActive>
            Tareas
          </NavButton>
        </div>
        <div className="order-1 flex w-full flex-col items-center justify-between gap-3 sm:ms-auto sm:flex-row sm:pb-3 xl:w-auto">
          <SearchInput />
          <div className="flex w-full flex-row justify-between gap-2 pb-2 sm:w-auto sm:pb-0">
            <ActionButton color="btn-secondary">
              <AdjustmentsHorizontalIcon className="h-6 w-6 sm:flex xl:hidden" />
              <p className="flex sm:hidden md:flex md:flex-row">Filtrar</p>
            </ActionButton>
            <ActionButton color="btn-primary">
              <PlusIcon className="flex h-6 w-6 xl:hidden" />
              <p className="flex sm:hidden md:flex md:flex-row">Agregar</p>
            </ActionButton>
          </div>
        </div>
      </section>
    </>
  )
}
