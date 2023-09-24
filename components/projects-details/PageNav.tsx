import { DocumentIcon, PlusIcon, QueueListIcon } from '@heroicons/react/24/outline'
import { type ProjectDetailsTab } from '@/lib/types'
import Button from '../Button'

// DRY Filter
interface Props {
  id: string
  tab: ProjectDetailsTab
  onTabClick: (tabOption?: ProjectDetailsTab) => void
}

export default function PageNav({ id, tab, onTabClick }: Props) {
  const addButtonUrl = tab === 'Tasks' ? 'tasks' : 'files'
  const textButton = tab === 'Tasks' ? 'tareas' : 'Archivos'
  const tabButtons = [
    {
      title: 'Tasks',
      content: 'Tareas',
      icon: <QueueListIcon className="h-5 w-5" />,
    },
    {
      title: 'Files',
      content: 'Archivos',
      icon: <DocumentIcon className="h-5 w-5" />,
    },
  ]

  return (
    <div className="flex w-full columns-1 flex-col items-start justify-between gap-4 pb-1 lg:columns-2 lg:flex-row lg:items-center lg:gap-0">
      <div className="flex w-full gap-x-2">
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
      <div className="flex w-full justify-end">
        <Button
          url={`home/projects/${id}/${addButtonUrl}/create`}
          color="PRIMARY"
          hover="WHITE"
        >
          <PlusIcon className="h-5 w-5" />
          Agregar {textButton}
        </Button>
      </div>
    </div>
  )
}
