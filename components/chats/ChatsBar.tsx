import { EllipsisHorizontalIcon, HashtagIcon } from '@heroicons/react/24/outline'
import AvatarIcon from '../AvatarIcon'
import Link from 'next/link'
import { type UserWithType } from '@/lib/types'
import { type Task, type Company, type Membership, type Person, type Project, type Team } from '@prisma/client'
import ChatsBarDropdown from './ChatsBarDropdown'

interface Props {
  activeUser: UserWithType
  isMember: boolean
  project: Project & {
    tasks: Task[]
    team: Team & {
      memberships: Array<Membership & {
        person: Person | null
        company: Company | null
      }>
    }
  }
}

export default function ChatsBar({ project, activeUser, isMember }: Props) {
  return (
    <div className="relative flex w-full flex-col justify-between shadow-lg sm:w-2/6 sm:max-w-xs xl:max-w-xl">
      <div className="flex w-full items-center justify-between rounded-tl-lg bg-neutral pb-2 pt-1 text-neutral-content">
        <div className="flex flex-col pl-3">
          <Link href={`home/teams/${project.team.id}`} className="hover:underline hover:underline-offset-2">
            <div className="line-clamp-1 text-base font-semibold">{project.team.name}</div>
          </Link>
          <div className="-mt-1 text-sm">{project.team.memberships.length} miembros</div>
        </div>
        <button className="btn-ghost btn-circle btn">
          <EllipsisHorizontalIcon className="h-7 w-7" />
        </button>
      </div>
      <div className="bg-white px-2 scrollbar">
        <div className="my-2 flex h-[20.5rem] flex-col gap-1">
          <Link href="#" className="border-b border-neutral-300 py-2.5 shadow">
            <span className="flex items-center text-base">
              <HashtagIcon className="mr-1.5 h-5 w-5" />
              General
            </span>
          </Link>
          <ChatsBarDropdown>
            <ul className="dropdown-content menu z-[1] gap-1 p-2">
              {project.tasks.map(task => {
                return (
                  <Link href="#" className="border-b border-neutral-300 px-2 py-1" key={task.id}>
                    <span className="text-sm"># {task.title}</span>
                  </Link>
                )
              })}
            </ul>
          </ChatsBarDropdown>
        </div>
      </div>
      <div className="sticky inset-x-0 bottom-0 flex items-center gap-2 rounded-bl-lg border-t border-neutral-300 bg-white px-2 py-2.5">
        <AvatarIcon username={activeUser.name} className="h-8 w-8 bg-neutral text-neutral-content" />
        <div className="flex flex-col">
          <p className="text-base font-semibold">{activeUser.name}</p>
          {isMember
            ? <p className="-mt-1 text-sm font-light">Miembro</p>
            : <p className="-mt-1 text-sm font-light">Líder</p>}
        </div>
      </div>
    </div>
  )
}
