import { type Subtask } from '@prisma/client'
import clsx from 'clsx'
import DeleteModal from './DeleteModal'
import Button from '../Button'
import { PencilIcon } from '@heroicons/react/24/outline'

type Props = React.PropsWithChildren<{
  subtask: Subtask
  editAction: string
  deleteAction: string
}>

export default function SubtaskItem({ subtask, editAction, deleteAction }: Props) {
  return (
    <div className="collapse-plus collapse border border-base-300">
      <input type="checkbox" />
      <div className="collapse-title bg-neutral-200">
        <div className="flex items-center space-x-3">
          <span className={clsx({
            'h-4 w-4 appearance-none rounded-lg border border-zinc-400 checked:border-transparent focus:outline-none': true,
            'checked:bg-success': subtask.status === 'DONE',
            'checked:bg-warning': subtask.status === 'PENDING',
            'checked:bg-secondary': subtask.status === 'REVIEW',
            'checked:bg-primary': subtask.status === 'PROGRESS',
          })}
          />
          <p className="text-neutral-700">{subtask.title}</p>
        </div>
      </div>
      <div className="collapse-content">
        <div className="my-2 flex gap-x-2">
          <Button
            url={editAction}
            style="ICON"
            color="CANCEL"
            hover="PRIMARY"
          >
            <PencilIcon className="h-5 w-5" />
          </Button>
          <DeleteModal title={subtask.title} action={deleteAction} />
        </div>
        <p>{subtask.description}</p>
      </div>
    </div>
  )
}
