import { BriefcaseIcon, ListBulletIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import clsx from 'clsx'
import Collapse from '../Collapse'
import { type TeamsTab } from '@/lib/types'
import SearchInput from '../SearchInput'

interface Props {
  filter: string | string[]
  search: string
  onSearch: (value: string) => void
}

export default function PageNav({ filter, search, onSearch }: Props) {
  const TEAMS_TAB_TRANSLATION = {
    all: 'Todos',
    personal: 'Mis equipos',
  }
  const links = [{
    title: 'all',
    content: 'Todos',
    icon: <ListBulletIcon className="h-5 w-5" />,
    query: 'all',
  }, {
    title: 'personal',
    content: 'Mis Equipos',
    icon: <BriefcaseIcon className="h-5 w-5" />,
    query: 'personal',
  }]

  return (
    <div className="flex w-full flex-col items-start justify-between gap-4 p-4 lg:gap-0">
      <div className="mb-2 flex w-full flex-col items-center justify-between gap-x-3 sm:flex-row lg:place-items-center">
        <SearchInput searchText={search} setSearchText={onSearch} />
      </div>
      <div className="mt-3 flex w-full flex-col gap-1 sm:mt-0 sm:w-2/4 sm:flex-row sm:gap-x-3">
        <Collapse
          title={`Categorías - ${TEAMS_TAB_TRANSLATION[filter as TeamsTab]}`}
          bg="bg-white"
        >
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              return (
                <Link
                  key={link.title}
                  href={{
                    pathname: '/home/teams',
                    query: { filter: link.query },
                  }}
                  className={clsx(
                    'btn', link.title === filter ? 'btn-primary hover:btn-ghost' : 'hover:btn-primary'
                  )}
                >
                  {link.icon}
                  {link.content}
                </Link>
              )
            })}
          </div>
        </Collapse>
      </div>
    </div>
  )
}
