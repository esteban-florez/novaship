import SearchInput from '../SearchInput'
import Collapse from '../Collapse'
import { BookmarkIcon, BriefcaseIcon, LightBulbIcon, ListBulletIcon } from '@heroicons/react/24/outline'
import { type UserType } from '@prisma/client'
import { type OffersTab } from '@/lib/types'
import Link from 'next/link'
import clsx from 'clsx'

interface Props {
  userType: UserType
  search: string
  filter: string | string[]
  onSearch: (value: string) => void
}

export default function PageNav({ userType, search, filter, onSearch }: Props) {
  const OFFERS_TAB_TRANSLATION = {
    all: 'Todas',
    suggested: 'Ofertas sugeridas',
    personal: 'Mis ofertas',
    applied: 'Ofertas aplicadas',
  }

  const links = [{
    title: 'all',
    content: 'Todas',
    icon: <ListBulletIcon className="h-5 w-5" />,
    query: 'all',
    condition: true,
  }, {
    title: 'personal',
    content: 'Mis ofertas',
    icon: <BriefcaseIcon className="h-5 w-5" />,
    query: 'personal',
    condition: userType === 'COMPANY',
  }, {
    title: 'applied',
    content: 'Ofertas aplicadas',
    icon: <BookmarkIcon className="h-5 w-5" />,
    query: 'applied',
    condition: userType === 'PERSON',
  }, {
    title: 'suggested',
    content: 'Ofertas sugeridas',
    icon: <LightBulbIcon className="h-5 w-5" />,
    query: 'suggested',
    condition: userType === 'PERSON',
  }]

  return (
    <div className="flex w-full flex-col gap-y-4 px-4 py-5 xl:px-6">
      <div className="w-full sm:w-2/4">
        <SearchInput searchText={search} setSearchText={onSearch} />
      </div>
      <div className="w-full sm:w-2/4">
        <Collapse
          title={`Categorías - ${OFFERS_TAB_TRANSLATION[filter as OffersTab]}`}
          bg="bg-white"
        >
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              if (link.condition) {
                return (
                  <Link
                    key={link.title}
                    href={{
                      pathname: '/home/offers',
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
              }

              return null
            })}
          </div>
        </Collapse>
      </div>
    </div>
  )
}
