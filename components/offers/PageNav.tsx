import SearchInput from '../SearchInput'
import Collapse from '../Collapse'
import Button from '../Button'
import { BookmarkIcon, BriefcaseIcon, ListBulletIcon, PlusIcon } from '@heroicons/react/24/outline'
import { type OffersTab } from '@/lib/types'
import { type UserType } from '@prisma/client'

interface Props {
  userType: UserType
  search: string
  tab: OffersTab
  onTabClick: (tabOption?: OffersTab) => void
  onSearch: (value: string) => void
}

const OFFERS_TAB_TRANSLATION = {
  All: 'Todas',
  Mine: 'Mis ofertas',
  Applied: 'Ofertas aplicadas',
}

export default function PageNav({ userType, search, tab, onTabClick, onSearch }: Props) {
  const navChildren = [{
    title: 'All',
    content: 'Todas',
    icon: <ListBulletIcon className="h-5 w-5" />,
    condition: true,
  }, {
    title: 'Mine',
    content: 'Mis ofertas',
    icon: <BriefcaseIcon className="h-5 w-5" />,
    condition: userType === 'COMPANY',
  }, {
    title: 'Applied',
    content: 'Ofertas aplicadas',
    icon: <BookmarkIcon className="h-5 w-5" />,
    condition: userType === 'PERSON',
  }]

  return (
    <div className="flex w-full flex-col items-center justify-between px-4 py-5 md:flex-row xl:px-6">
      <div className="hidden gap-2 xl:flex">
        {navChildren.map((children) => {
          if (children.condition) {
            return (
              <Button
                key={children.title}
                style="DEFAULT"
                color={children.title === tab ? 'PRIMARY' : 'WHITE'}
                hover={children.title === tab ? 'WHITE' : 'PRIMARY'}
                onClick={() => { onTabClick(children.title as OffersTab) }}
              >
                {children.icon}
                {children.content}
              </Button>
            )
          }

          return null
        })}
      </div>
      <div className="w-full xl:hidden">
        <Collapse
          title={`Categorías - ${OFFERS_TAB_TRANSLATION[tab]}`}
          bg="bg-white"
        >
          <div className="flex flex-col gap-2">
            {navChildren.map((children) => {
              if (children.condition) {
                return (
                  <Button
                    key={children.title}
                    style="DEFAULT"
                    color={children.title === tab ? 'PRIMARY' : 'WHITE'}
                    hover={children.title === tab ? 'WHITE' : 'PRIMARY'}
                    onClick={() => { onTabClick(children.title as OffersTab) }}
                  >
                    {children.icon}
                    {children.content}
                  </Button>
                )
              }

              return null
            })}
          </div>
        </Collapse>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row md:place-items-center md:justify-end xl:w-auto">
        <SearchInput searchText={search} setSearchText={onSearch} />
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
