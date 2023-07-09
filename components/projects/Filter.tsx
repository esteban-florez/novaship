import { ActionButton, NavButton } from '../Buttons'
import SearchInput from '../SearchInput'

export default function Filter() {
  return (
    <section className="my-8 mb-4 flex w-full flex-wrap items-center gap-2">
      <div className="flex-center flex-wrap gap-x-2">
        <NavButton isActive>
          Todos
        </NavButton>
        <NavButton>
          Mis proyectos
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
