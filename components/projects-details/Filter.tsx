import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import SearchInput from '../SearchInput'
import ActionButton from '../ActionButton'
import Link from 'next/link'

// DRY Filter
type Props = React.PropsWithChildren<{
  projectId: string | ''
}>

export default function Filter({ projectId }: Props) {
  return (
    <section className="mt-5 flex w-full flex-col flex-wrap gap-2 rounded-lg xl:flex-row xl:items-center">
      {/* <div className="order-2 gap-x-2 xl:order-none">
          <NavButton url="/home/projects/project" isActive>
            Archivos
          </NavButton>
          <NavButton url="/home/projects/tasks">
            Tareas
          </NavButton>
        </div> */}
      <div className="order-1 flex w-full flex-col items-center justify-between gap-3 sm:ms-auto sm:flex-row sm:pb-3 xl:w-auto">
        <SearchInput />
        <div className="flex w-full flex-row justify-between gap-2 pb-2 sm:w-auto sm:pb-0">
          <ActionButton color="btn-secondary">
            <AdjustmentsHorizontalIcon className="h-6 w-6 sm:flex xl:hidden" />
            <p className="flex sm:hidden md:flex md:flex-row">Filtrar</p>
          </ActionButton>
          <Link href={`/home/projects/${projectId}/tasks/create`} className="btn-primary btn-sm btn border-none px-6">
            Agregar
          </Link>
        </div>
      </div>
    </section>
  )
}
