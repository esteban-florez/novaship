import Collapse from '../Collapse'
import Button from '../Button'
import { BriefcaseIcon, ListBulletIcon } from '@heroicons/react/24/outline'
import { type TabProp } from '@/lib/types'

interface Props {
  tab: TabProp
  onTabClick: (tabOption?: TabProp) => void
}

const TAB_TRANSLATION = {
  All: 'Todos',
  Mine: 'Mis equipos',
}

export default function PageNav({ tab, onTabClick }: Props) {
  const navChildren = [{
    title: 'All',
    content: 'Todas',
    icon: <ListBulletIcon className="h-5 w-5" />,
    condition: true,
  }, {
    title: 'Mine',
    content: 'Mis Equipos',
    icon: <BriefcaseIcon className="h-5 w-5" />,
    condition: true,
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
                onClick={() => { onTabClick(children.title as TabProp) }}
              >
                {children.icon}
                {children.content}
              </Button>
            )
          }

          return null
        })}
      </div>
      <div className="mb-4 w-full sm:mb-0 xl:hidden">
        <Collapse
          title={`Categorías - ${TAB_TRANSLATION[tab]}`}
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
                    onClick={() => { onTabClick(children.title as TabProp) }}
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
    </div>
  )
}
