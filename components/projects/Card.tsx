import { EyeIcon, PencilIcon } from '@heroicons/react/24/outline'
import AvatarIcon from '../AvatarIcon'
import { type Membership, type Person } from '@prisma/client'
import clsx from 'clsx'
import DeleteModal from './DeleteModal'
import Button from '../modal/Button'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  id: string
  title: string
  owner?: string
  status: string
  members: Array<Membership & {
    person: Person
  }>
}>

const stackOrder = ['z-40', 'z-30', 'z-20']

export default function Card({ id, title, owner = '', status, members }: Props) {
  const hasOwner = owner !== ''
  const currentUserIsOwner = owner === ''

  return (
    <section className="card flex flex-col justify-between rounded-lg border border-solid border-zinc-300 shadow sm:flex-row md:rounded-l-none lg:items-center">
      <div className="order-1 flex w-full shrink-0 flex-row items-center gap-3 ps-4 sm:w-1/4">
        <div className="flex w-full flex-col pe-4">
          <h3 className="truncate text-base font-bold sm:text-lg">{title}</h3>
          <small className="-mt-1 line-clamp-6 text-sm font-semibold text-stone-500">Estado: {status}</small>
        </div>
      </div>

      {hasOwner &&
        <div className="order-3 flex w-full shrink-0 flex-row gap-2 p-4 sm:w-1/4 lg:p-0">
          <AvatarIcon username={owner} className="bg-neutral text-white" />
          <div className="flex flex-col">
            <h5 className="text-base font-bold">{owner}</h5>
            <h5 className="-mt-1 line-clamp-6 text-sm">Responsable</h5>
          </div>
        </div>}

      <div className="order-4 flex w-full shrink-0 flex-row items-center justify-center -space-x-3 sm:w-1/4">
        {members.map((member, i) => {
          if (i <= 2) {
            return <AvatarIcon key={member.id} username={member.person.name} className={clsx('border-2 border-white bg-secondary', stackOrder[i])} />
          }
          return null
        })}
        {members.length > 3 &&
          <div className={clsx(
            'z-10 flex h-10 w-10 items-center justify-center text-sm font-bold',
            members.length > 9 ? 'ps-2' : ''
          )}
          >
            +{members.length - 3}
          </div>}
      </div>

      <div className="order-5 flex w-full shrink-0 flex-row justify-center gap-2 p-4 sm:w-1/4 sm:justify-end">
        <Link href={`/home/projects/${id}`}>
          <Button className="btn-square btn-sm btn rounded-sm hover:btn-primary">
            <EyeIcon className="h-5 w-5" />
          </Button>
        </Link>
        {currentUserIsOwner &&
          (
            <>
              <Link href={`/home/projects/${id}/update`}>
                <Button className="btn-square btn-sm btn rounded-sm hover:btn-primary">
                  <PencilIcon className="h-5 w-5" />
                </Button>
              </Link>
              <DeleteModal title={title} action={`/api/projects/${id}`} />
            </>
          )}
      </div>
    </section>
  )
}
