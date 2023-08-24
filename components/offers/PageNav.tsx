import Link from 'next/link'
import SearchInput from '../SearchInput'
import NavButton from '../NavButton'
import Collapse from '../Collapse'

export default function PageNav() {
  const navChildren = ['Todos', 'mis ofertas', 'Trabajos aplicados']

  return (
    <div className="flex w-full flex-col items-center justify-between px-4 py-5 md:flex-row xl:px-6">
      <div className="hidden gap-x-1 gap-y-4 xl:flex">
        {navChildren.map((children) => {
          const isActive = children === 'Todos'
          return (
            <NavButton key={children} isActive={isActive}>{children}</NavButton>
          )
        })}
      </div>
      <div className="w-full xl:hidden">
        <Collapse
          title="Categorías"
          bg="bg-white"
        >
          <div className="flex flex-col gap-2">
            {navChildren.map((children) => {
              const isActive = children === 'Todos'
              return (
                <NavButton key={children} isActive={isActive}>{children}</NavButton>
              )
            })}
          </div>
        </Collapse>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row md:place-items-center md:justify-end xl:w-auto">
        <SearchInput />
        <Link href="/home/offers/create" className="btn-sm btn w-full rounded-xl bg-primary py-2 text-white shadow-lg md:btn-md sm:w-40 md:w-auto md:text-base">
          Publicar
        </Link>
      </div>
    </div>
  )
}
