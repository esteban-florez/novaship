import { type Subtask } from '@prisma/client'
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
    <section className="flex flex-col rounded-sm border px-4 py-2 text-neutral-600 transition-colors delay-150 duration-150 hover:bg-neutral-200">
      <h5 className="font-semibold">{subtask.title}</h5>
      <p>{subtask.description}</p>
      <div className="my-2 flex gap-x-2">
        <Button
          url={editAction}
          color="WHITE"
          hover="PRIMARY"
        >
          <PencilIcon className="h-5 w-5" />
          Editar
        </Button>
        <DeleteModal title={subtask.title} action={deleteAction} />
      </div>
    </section>
  )
}
