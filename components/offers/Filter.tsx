import Link from 'next/link'
import SearchInput from '../SearchInput'
import FilterButtons from './Carrousel/FilterButtons'

export default function Filter() {
  return (
    <section className="mb-4 flex w-full flex-col items-center justify-between gap-4 pt-4 md:flex-row xl:mb-0 xl:gap-2">
      <div className="hidden gap-x-1 gap-y-4 xl:flex">
        <FilterButtons />
      </div>
      <div className="collapse-arrow collapse rounded-lg bg-white xl:hidden">
        <input type="checkbox" />
        <p className="collapse-title font-semibold">
          Categorías
        </p>
        <div className="collapse-content flex flex-col gap-2">
          <FilterButtons />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row md:place-items-start md:justify-end xl:w-auto">
        <SearchInput />
        <Link href="/offers/create" className="btn-primary btn-sm btn h-8 w-full py-2 sm:w-40 md:w-auto">
          Publicar
        </Link>
      </div>
    </section>
  )
}
