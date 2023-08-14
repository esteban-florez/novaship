import Link from 'next/link'
import SearchInput from '../SearchInput'
import NavButton from '../NavButton'

export default function PageNav() {
  const navChildren = ['Todos', 'mis ofertas', 'Trabajos aplicados']

  return (
    <section className="relative flex h-44 sm:h-32 lg:h-24">
      <div className="z-20 flex w-full flex-col items-center justify-between px-4 py-3 md:flex-row xl:px-8">
        <div className="hidden gap-x-1 gap-y-4 xl:flex">
          {navChildren.map((children) => {
            const isActive = children === 'Todos'
            return (
              <NavButton key={children} isActive={isActive}>{children}</NavButton>
            )
          })}
        </div>
        <div className="collapse-arrow collapse bg-primary text-white xl:hidden">
          <input type="checkbox" />
          <p className="collapse-title font-semibold">
            Categorías
          </p>
          <div className="collapse-content flex flex-col gap-2">
            {navChildren.map((children) => {
              const isActive = children === 'Todos'
              return (
                <NavButton key={children} isActive={isActive}>{children}</NavButton>
              )
            })}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row md:place-items-start md:justify-end xl:w-auto">
          <SearchInput />
          <Link href="/home/offers/create" className="btn-sm btn h-8 w-full bg-primary py-2 text-white sm:w-40 md:w-auto md:bg-white md:text-black">
            Publicar
          </Link>
        </div>
      </div>
      <img src="/coso3.webp" alt="Imagen decorativa en esquinas" className="pointer-events-none absolute left-0 top-0 hidden h-[150%] w-full xl:flex" />
    </section>
  )
}
