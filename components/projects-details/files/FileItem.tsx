import { PencilIcon, EyeIcon } from '@heroicons/react/24/outline'
import { type Participation, type File, type Membership } from '@prisma/client'
import DeleteModal from '@/components/projects/DeleteModal'
import AvatarIcon from '@/components/AvatarIcon'
import Button from '@/components/Button'
import clsx from 'clsx'

interface Props {
  projectId: string
  file: File & {
    membership: Membership & {
      participations: Participation[]
    }
  }
}

const stackOrder = ['z-40', 'z-30', 'z-20']

export default function FileItem({ projectId, file }: Props) {
  return (
    <section className="flex flex-col rounded-md border px-4 py-2 shadow transition-colors delay-150 duration-150 hover:bg-neutral-200">
      <header className="mb-1 gap-x-2">
        <h2 className="text-xl font-semibold">{file.title}</h2>
        <p className="text-sm font-semibold text-neutral-600">ola</p>
      </header>
      <main className="flex items-center">
        <div className="flex shrink-0 flex-row items-center justify-start -space-x-3">
          {file.membership.participations.map((participation, i) => {
            if (i <= 2) {
              return (
                <AvatarIcon
                  key={participation.id}
                  username="Pa"
                  className={clsx('h-10 w-10 border-2 border-white bg-black text-white', stackOrder[i], i > 0 && 'ms-1')}
                />
              )
            }
            return (
              <div className="flex flex-row gap-1" key={participation.id}>
                <AvatarIcon username="pa" className="h-6 w-6" />
                <div className="flex flex-col">
                  <p className="text-base">{participation.id}</p>
                  <p className="text-sm">Hace {participation.updatedAt.getDate()} días</p>
                </div>
              </div>
            )
          })}
          <p className="text-sm">Hace {file.updatedAt.getDate()} días</p>
        </div>
      </main>
      <div className="mt-2 flex flex-col gap-2 text-sm sm:flex-row">
        <Button
          url={`/home/projects/${projectId}/files/${file.id}`}
          color="WHITE"
          hover="PRIMARY"
        >
          <EyeIcon className="h-5 w-5" />
          Ver
        </Button>
        <Button
          url={`/home/projects/${projectId}/files/${file.id}/update`}
          color="WHITE"
          hover="PRIMARY"
        >
          <PencilIcon className="h-5 w-5" />
          Editar
        </Button>
        <DeleteModal title={file.title} action={`/api/files/${file.id}`} />
      </div>
    </section>
  )
}
