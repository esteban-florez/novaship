import { ListBulletIcon, PlusIcon, StarIcon } from '@heroicons/react/24/outline'
import Button from '../Button'
import { type TabProp } from '@/lib/types'
import SearchInput from '../SearchInput'
import Link from 'next/link'

interface Props {
  filter: string | string[]
  search: string
  active: TabProp
  onTabClick: (tabOption?: TabProp) => void
  onSearch: (value: string) => void
}

// DRY Filter
export default function PageNav({ filter, search, active, onTabClick, onSearch }: Props) {
  return (
    <div className="flex w-full columns-1 flex-col items-start justify-between gap-4 p-4 lg:columns-2 lg:flex-row lg:items-center lg:gap-0">
      <div className="order-2 mt-3 flex w-full flex-col gap-1 sm:mt-0 sm:flex-row sm:gap-x-3 lg:order-1">
        <Link href={{
          pathname: '/home/projects',
          query: { filter: 'all' },
        }}
        >
          <Button
            style="TAB"
            color={filter === 'all' ? 'PRIMARY' : 'WHITE'}
            hover={filter === 'all' ? 'WHITE' : 'PRIMARY'}
          >
            <ListBulletIcon className="h-6 w-6" />
            Todos
          </Button>
        </Link>
        <Link href={{
          pathname: '/home/projects',
          query: { filter: 'personal' },
        }}
        >
          <Button
            style="TAB"
            color={filter === 'personal' ? 'PRIMARY' : 'WHITE'}
            hover={filter === 'personal' ? 'WHITE' : 'PRIMARY'}
          >
            <StarIcon className="h-6 w-6" />
            Mis proyectos
          </Button>
        </Link>
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
