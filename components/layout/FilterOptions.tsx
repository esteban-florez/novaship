function SearchInput() {
  return (
    <input
      type="text"
      placeholder="Buscar"
      className="input input-xs max-w-xs rounded-full bg-gray-600 text-white outline-none transition-colors delay-150 sm:input-sm focus:bg-base-100 focus:ring focus:ring-primary"
    />
  )
}

function FilterButton() {
  return (
    <button className="btn-xs btn rounded-full border-none bg-white normal-case text-black sm:btn-sm hover:bg-primary hover:text-white">
      Filtrar
    </button>
  )
}

function PublishButton() {
  return (
    <button className="btn-xs btn rounded-full border-none bg-secondary normal-case text-white sm:btn-sm hover:bg-primary">
      Publicar
    </button>
  )
}

export default function FilterOptions() {
  return (
    <section className="flex w-full items-center justify-end gap-2 bg-secondary/10 p-4">
      <SearchInput />
      <FilterButton />
      <PublishButton />
    </section>
  )
}
