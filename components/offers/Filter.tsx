import SearchInput from '../SearchInput'
import FilterButtons from './Carrousel/FilterButtons'

function PublishButton() {
  return (
    <button className="btn-primary btn-sm btn w-full md:btn-md md:w-auto">
      Publicar
    </button>
  )
}

export default function Filter() {
  return (
    <section className="flex w-full flex-col items-center justify-between gap-2 xl:flex-row">
      <div className="hidden gap-x-1 gap-y-4 md:flex">
        <FilterButtons />
      </div>
      <div className="collapse-arrow collapse bg-base-200 md:hidden">
        <input type="checkbox" />
        <p className="collapse-title font-semibold">
          Categorías
        </p>
        <div className="collapse-content flex flex-col gap-2">
          <FilterButtons />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 md:w-full md:flex-row xl:w-auto">
        <SearchInput />
        <PublishButton />
      </div>
    </section>
  )
}
