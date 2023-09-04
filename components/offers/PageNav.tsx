import SearchInput from '../SearchInput'
import Collapse from '../Collapse'
import Button from '../Button'
import { BookmarkIcon, BriefcaseIcon, ListBulletIcon, PlusIcon } from '@heroicons/react/24/outline'
import { type OffersTab } from '@/lib/types'

interface Props {
  search: string
  tab: OffersTab
  onTabClick: (tabOption?: OffersTab) => void
  onSearch: (value: string) => void
}

export default function PageNav({ search, tab, onTabClick, onSearch }: Props) {
  const navChildren = [{
    title: 'All',
    content: 'Todos',
    icon: <ListBulletIcon className="h-5 w-5" />,
  }, {
    title: 'Mine',
    content: 'Mis ofertas',
    icon: <BriefcaseIcon className="h-5 w-5" />,
  }, {
    title: 'Applied',
    content: 'Trabajos aplicados',
    icon: <BookmarkIcon className="h-5 w-5" />,
  }]

  return (
    <div className="flex w-full flex-col items-center justify-between px-4 py-5 md:flex-row xl:px-6">
      <div className="hidden gap-2 xl:flex">
        {navChildren.map((children) => {
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
        })}
      </div>
      <div className="w-full xl:hidden">
        <Collapse
          title="Categorías"
          bg="bg-white"
        >
          <div className="flex flex-col gap-2">
            {navChildren.map((children) => {
              // const isActive = children === 'Todos'
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
                // <NavButton key={children} >{children}</NavButton>
              )
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
