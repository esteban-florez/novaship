import { type Team, type Company, type Membership, type Person, type Project } from '@prisma/client'
import ChatBubble from './ChatBubble'

interface Props {
  isOwner?: boolean
  project?: Project & {
    team: Team & {
      memberships: Array<Membership & {
        person: Person | null
        company: Company | null
      }>
    }
  }
}

export default function ChatsBar({ isOwner, project }: Props) {
  console.log(isOwner, project)
  return (
    <div className="w-full rounded-xl bg-white shadow-md sm:w-2/6 sm:max-w-xs xl:max-w-xl">
      <div className="flex flex-col gap-3 p-2">
        <p className="text-base font-semibold">Miembros</p>
        <ChatBubble
          name="Joseph Monter"
          lastConnection={24}
          chatIsOpen
        />
        <ChatBubble
          name="Joseph Monter"
          lastConnection={24}
          chatIsOpen
        />
      </div>
    </div>
  )
}
