import { ActionButton, NavButton } from '../Buttons'
import SearchInput from '../SearchInput'

export default function Filter() {
  return (
    <section className="my-5 flex w-full flex-wrap items-center gap-2 rounded-lg">
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
