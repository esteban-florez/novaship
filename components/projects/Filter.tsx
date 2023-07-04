import SearchInput from '../SearchInput'

interface Props {
  content: string
  isActive?: boolean
  nav?: boolean
  color: string
}

function ButtonActions({ content, color, isActive = false, nav = false }: Props) {
  const activeClasses = 'btn-active text-white'
  const inactiveClasses = 'hover:btn-active hover:text-white'

  if (nav) {
    return (
      <button className={`${isActive ? activeClasses : inactiveClasses} btn-${color} btn-sm btn text-sm font-semibold normal-case sm:btn-md sm:text-lg`}>
        {content}
      </button>
    )
  } else {
    return (
      <button className={`btn-${color} btn-sm btn border-none px-6`}>
        {content}
      </button>
    )
  }
}

export default function Filter() {
  return (
    <>
      <section className="my-8 mb-4 flex w-full flex-wrap items-center gap-2">
        <div className="flex-center flex-wrap gap-x-2">
          <ButtonActions color="ghost" content="Archivos" nav isActive />
          <ButtonActions color="ghost" content="Tareas" nav />
        </div>
        <div className="flex w-full items-center justify-center gap-3 sm:ms-auto sm:w-auto sm:justify-end">
          <SearchInput />
          <ButtonActions content="Filtar" color="secondary" />
          <ButtonActions content="Agregar" color="primary" />
        </div>
      </section>
    </>
  )
}
