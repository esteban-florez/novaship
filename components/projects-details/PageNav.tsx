import { DocumentIcon, PlusIcon, QueueListIcon } from '@heroicons/react/24/outline'
import { type ProjectDetailsTab } from '@/lib/types'
import Button from '../Button'

// DRY Filter
interface Props {
  tab: ProjectDetailsTab
  onTabClick: (tabOption?: ProjectDetailsTab) => void
}

export default function PageNav({ tab, onTabClick }: Props) {
  const tabButtons = [{
    title: 'Files',
    content: 'Archivos',
    icon: <DocumentIcon className="h-5 w-5" />,
  },
  {
    title: 'Tasks',
    content: 'Tareas',
    icon: <QueueListIcon className="h-5 w-5" />,
  }]

  return (
    <div className="flex w-full columns-1 flex-col items-start justify-between gap-4 pb-3 lg:columns-2 lg:flex-row lg:items-center lg:gap-0">
      <div className="order-2 flex w-full gap-x-2 lg:order-1">
        {tabButtons.map((tabs) => {
          return (
            <Button
              key={tabs.title}
              style="DEFAULT"
              color={tabs.title === tab ? 'PRIMARY' : 'WHITE'}
              hover={tabs.title === tab ? 'WHITE' : 'PRIMARY'}
              onClick={() => { onTabClick(tabs.title as ProjectDetailsTab) }}
            >
              {tabs.icon}
              {tabs.content}
            </Button>
          )
        })}
      </div>
      <div className="order-1 flex w-full flex-row items-center justify-between gap-3 lg:order-2 lg:place-items-center lg:justify-end xl:w-auto">
        <Button
          url="/home/projects/create"
          style="DEFAULT"
          color="PRIMARY"
          hover="WHITE"
        >
          <PlusIcon className="h-6 w-6" />
          <p className="text-base">Agregar</p>
        </Button>
      </div>
    </div>
  )
}
