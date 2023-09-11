import { ListBulletIcon, PlusIcon, StarIcon } from '@heroicons/react/24/outline'
import Button from '../Button'
import { type TabProp } from '@/lib/types'
import SearchInput from '../SearchInput'

interface Props {
  search: string
  active: TabProp
  onTabClick: (tabOption?: TabProp) => void
  onSearch: (value: string) => void
}

// DRY Filter
export default function PageNav({ search, active, onTabClick, onSearch }: Props) {
  return (
    <div className="flex w-full columns-1 flex-col items-start justify-between gap-4 p-4 lg:columns-2 lg:flex-row lg:items-center lg:gap-0">
      <div className="order-2 mt-3 flex w-full flex-col gap-1 sm:mt-0 sm:flex-row sm:gap-x-3 lg:order-1">
        <Button
          style="TAB"
          color={active === 'All' ? 'PRIMARY' : 'WHITE'}
          hover={active === 'All' ? 'WHITE' : 'PRIMARY'}
          onClick={() => { onTabClick('All') }}
        >
          <ListBulletIcon className="h-6 w-6" />
          <p className="text-base">Todos</p>
        </Button>
        <Button
          style="TAB"
          color={active === 'Mine' ? 'PRIMARY' : 'WHITE'}
          hover={active === 'Mine' ? 'WHITE' : 'PRIMARY'}
          onClick={() => { onTabClick('Mine') }}
        >
          <StarIcon className="h-6 w-6" />
          <p className="text-base">Mis proyectos</p>
        </Button>
      </div>
      <div className="order-1 flex w-full flex-col items-center justify-between gap-x-3 sm:flex-row lg:order-2 lg:place-items-center lg:justify-end xl:w-auto">
        <SearchInput searchText={search} setSearchText={onSearch} />
        <div className="mt-2 w-full sm:mt-0 sm:w-auto">
          <Button
            url="/home/projects/create"
            style="DEFAULT"
            color="PRIMARY"
            hover="WHITE"
          >
            <PlusIcon className="h-6 w-6" />
            Agregar
          </Button>
        </div>
      </div>
    </div>
  )
}
