import SearchInput from '../SearchInput'
import NavButton from '../NavButton'
import Collapse from '../Collapse'
import Button from '../Button'
import { PlusIcon } from '@heroicons/react/24/outline'

export default function PageNav() {
  const navChildren = ['Todos', 'Mis ofertas', 'Trabajos aplicados']

  return (
    <div className="flex w-full flex-col items-center justify-between px-4 py-5 md:flex-row xl:px-6">
      {/* No usar 2 componentes exactamente iguales, modificar uno para que sirva para ambos casos */}
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
        <Button
          url="/home/offers/create"
          style="DEFAULT"
          color="PRIMARY"
          hover="WHITE"
        >
          <PlusIcon className="h-5 w-5" />
          Agregar
        </Button>
      </div>
    </div>
  )
}
