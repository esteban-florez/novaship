import { GlobeAltIcon, ListBulletIcon, StarIcon } from '@heroicons/react/24/outline'
import SearchInput from '../SearchInput'
import Link from 'next/link'
import Collapse from '../Collapse'
import { type ProjectsTab } from '@/lib/types'
import clsx from 'clsx'

interface Props {
  filter: string | string[]
  search: string
  onSearch: (value: string) => void
}

const PROJECTS_TAB_TRANSLATION = {
  all: 'Todos',
  suggested: 'Proyectos sugeridos',
  personal: 'Mis proyectos',
}

// DRY Filter
export default function PageNav({ filter, search, onSearch }: Props) {
  const links = [{
    title: 'all',
    content: 'Todos',
    icon: <GlobeAltIcon className="h-5 w-5" />,
    query: 'all',
  }, {
    title: 'personal',
    content: 'Mis proyectos',
    icon: <ListBulletIcon className="h-5 w-5" />,
    query: 'personal',
  }, {
    title: 'suggested',
    content: 'Proyectos sugeridos',
    icon: <StarIcon className="h-5 w-5" />,
    query: 'suggested',
  }]

  return (
    <div className="flex w-full flex-col items-start justify-between gap-4 p-4 lg:gap-0">
      <div className="mb-2 flex w-full flex-col items-center justify-between gap-x-3 sm:flex-row lg:place-items-center">
        <SearchInput searchText={search} setSearchText={onSearch} />
      </div>
      <div className="mt-3 flex w-full flex-col gap-1 sm:mt-0 sm:w-2/4 sm:flex-row sm:gap-x-3">
        <Collapse
          title={`Categorías - ${PROJECTS_TAB_TRANSLATION[filter as ProjectsTab]}`}
          bg="bg-white"
        >
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              return (
                <Link
                  key={link.title}
                  href={{
                    pathname: '/home/projects',
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
