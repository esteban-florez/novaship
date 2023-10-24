import DeleteModal from '@/components/projects/DeleteModal'
import { format } from '@/lib/utils/date'
import { PencilIcon } from '@heroicons/react/24/outline'
import { type Revision } from '@prisma/client'
import RevisionModal from '../revisions/RevisionModal'

interface Props {
  revisions: Revision[]
}

export default function Revisions({ revisions }: Props) {
  const hasRevisions = revisions.length > 0
  return (
    <>
      <h6 className="-mb-2 font-semibold">Revisiones</h6>
      {!hasRevisions && (
        <small className="text-neutral-600 font-semibold">
          No hay revisiones registradas.
        </small>
      )}
      {hasRevisions && (
        <ul className="mt-2">
          {revisions.map((revision) => {
            return (
              <li
                key={revision.id}
                className="flex flex-col sm:flex-row justify-between rounded-md border px-4 py-2 transition-all delay-75 duration-75 hover:bg-neutral-300"
              >
                <div>
                  <p className="-mb-2">{revision.content}</p>
                  <small className="font-semibold text-neutral-600">
                    {format(revision.createdAt)}
                  </small>
                </div>
                <div className="mt-2 flex sm:join sm:justify-normal justify-between">
                  <div
                    className="tooltip"
                    data-tip="Editar revisión"
                  >
                    <RevisionModal
                      action={`/api/revision/${revision.id}`}
                      method="PUT"
                      revision={revision}
                      icon={<PencilIcon className="h-4 w-4" />}
                    />
                  </div>
                  <div
                    className="tooltip"
                    data-tip="Borrar revisión"
                  >
                    <DeleteModal
                      title={revision.content}
                      action={`/api/revision/${revision.id}`}
                    />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
