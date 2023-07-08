import SearchInput from '../SearchInput'

type Props = React.PropsWithChildren<{
  color: string
}>

type NavButtonProps = React.PropsWithChildren<{
  isActive?: boolean
}>

function NavButton({ children, isActive = false }: NavButtonProps) {
  const activeClasses = 'btn-active text-white'
  const inactiveClasses = 'hover:btn-active hover:text-white'

  return (
    <button className={`${isActive ? activeClasses : inactiveClasses} btn-ghost btn-sm btn text-sm font-semibold normal-case sm:btn-md sm:text-lg`}>
      {children}
    </button>
  )
}

function ActionButton({ children, color }: Props) {
  return (
    <button className={`${color} btn-sm btn border-none px-6`}>
      {children}
    </button>
  )
}

export default function Filter() {
  return (
    <section className="my-8 mb-4 flex w-full flex-wrap items-center gap-2">
      <div className="flex-center flex-wrap gap-x-2">
        <NavButton isActive>
          Archivos
        </NavButton>
        <NavButton>
          Tareas
        </NavButton>
      </div>
      <div className="flex w-full items-center justify-center gap-3 sm:ms-auto sm:w-auto sm:justify-end">
        <SearchInput />
        <ActionButton color="btn-secondary">
          Filtrar
        </ActionButton>
        <ActionButton color="btn-primary">
          Agregar
        </ActionButton>
      </div>
    </section>
  )
}
