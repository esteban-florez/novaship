interface Props {
  content: string
  isActive?: boolean
}

function Btn({ content, isActive = false }: Props) {
  const activeClasses = 'btn-active text-white'
  const inactiveClasses = 'hover:btn-active hover:text-white'

  return (
    <button className={`${isActive ? activeClasses : inactiveClasses} btn-ghost btn-sm btn text-sm font-semibold normal-case sm:btn-md sm:text-lg`}>
      {content}
    </button>
  )
}

function SearchInput() {
  return (
    <input
      type="text"
      placeholder="Buscar"
      className="input input-sm max-w-sm rounded-full bg-gray-600 text-white outline-none transition-colors delay-150 focus:bg-base-100 focus:ring focus:ring-primary"
    />
  )
}

function PublishButton() {
  return (
    <button className="btn-primary btn-sm btn w-full border-none sm:btn-wide">
      Publicar
    </button>
  )
}

export default function Filter() {
  return (
    <section className="my-8 flex w-full flex-wrap items-center gap-2 px-8">
      <div className="flex-center mb-4 flex-wrap gap-x-2 gap-y-4">
        <Btn content="Todos" isActive />
        <Btn content=" Mis ofertas de trabajo" />
        <Btn content="Trabajos aplicados" />
        <Btn content="Filtrar por" />
        <SearchInput />
      </div>
      <div className="flex w-full items-center justify-center sm:ms-auto sm:w-auto sm:justify-end">
        <PublishButton />
      </div>
    </section>
  )
}
