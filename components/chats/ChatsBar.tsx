import ChatBubble from './ChatBubble'
import { type ProjectsWithTeamAndMessages } from '@/lib/types'

interface Props {
  project: ProjectsWithTeamAndMessages
}

export default function ChatsBar({ project }: Props) {
  return (
    <div className="w-full rounded-xl bg-white shadow-md sm:w-2/6 sm:max-w-xs xl:max-w-xl">
      <div className="flex flex-col gap-3 p-2">
        <p className="text-base font-semibold">Miembros</p>
        {project.team.memberships.map(member => {
          return (
            <ChatBubble
              key={member.id}
              name={member.company?.name ?? member.person?.name ?? ''}
              lastConnection={24}
              chatIsOpen
            />
          )
        })}
      </div>
    </div>
  )
}
