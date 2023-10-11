import { Revision, type Subtask } from '@prisma/client'
import DeleteModal from './DeleteModal'
import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { format } from '@/lib/utils/date'

type Props = React.PropsWithChildren<{
  subtask: Subtask & {
    revisions: Revision[]
  }
  projectId: string
  taskId: string
  editAction: string
  revisionAction: string
}>

export default function SubtaskItem({ projectId, taskId, subtask, editAction, revisionAction }: Props) {
  return (
    <section className="w-full flex justify-between rounded-sm border px-4 py-2 text-neutral-600 transition-colors delay-150 duration-150 hover:bg-neutral-200">
      <div className='flex-col'>
        <h5 className="font-semibold">{subtask.title}</h5>
        <p>{subtask.description}</p>
        <ul className='mt-2 w-full'>
          {subtask.revisions.map(revision => {
            return (
              <li key={revision.id} className='w-full flex justify-between border rounded-md py-2 px-4 hover:bg-neutral-300 transition-all delay-75 duration-75'>
                <div>
                  <p className='-mb-2'>{revision.content}</p>
                  <small className='font-semibold text-neutral-600'>{format(revision.createdAt)}</small>
                </div>
                <div className="join">
                  <div className="tooltip" data-tip="Editar revisión">
                    <Link href={`/home/projects/${projectId}/tasks/${taskId}/subtasks/${subtask.id}/revisions/${revision.id}/update`} className='join-item btn btn-primary hover:bg-white hover:text-neutral-600 hover:border-primary'>
                      <PencilIcon className='h-4 w-4' />
                    </Link>
                  </div>
                  <div className="tooltip" data-tip="Borrar revisión">
                    <DeleteModal title={revision.content} action={`/api/revision/${revision.id}`} />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="my-2 flex join">
        <div className="tooltip" data-tip="Editar subtarea">
          <Link href={editAction} className='join-item btn btn-primary hover:bg-white hover:text-neutral-600 hover:border-primary'>
            <PencilIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="tooltip" data-tip="Añadir revisión">
          <Link href={revisionAction} className='join-item btn btn-primary hover:bg-white hover:text-neutral-600 hover:border-primary'>
            <PlusIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="tooltip" data-tip="Borrar subtarea">
          <DeleteModal title={subtask.title} action={`/api/subtasks/${subtask.id}`} />
        </div>
      </div>
    </section>
  )
}
