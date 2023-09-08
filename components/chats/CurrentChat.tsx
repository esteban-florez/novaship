import Message from './Message'
import ChatFooter from './ChatFooter'
import { type Company, type Membership, type Person, type Project } from '@prisma/client'
// import AvatarIcon from '../AvatarIcon'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'

interface Props {
  project: Project & {
    person: Person | null
    company: Company | null
    memberships: Array<Membership & {
      person: Person
    }>
  }
}

export default function CurrentChat({ project }: Props) {
  return (
    <div className="chat-grid hidden flex-col bg-white shadow-lg sm:grid sm:w-full">
      <header className="flex items-center justify-between border-b-2 border-white bg-primary px-4 py-3 font-bold">
        <div className="flex items-center justify-start gap-2">
          {/* <AvatarIcon username="Joseph Monter" className="bg-neutral text-white" /> */}
          <h3 className="text-base font-semibold text-primary-content sm:text-xl">
            Canal 1
          </h3>
        </div>
        <button className="btn-ghost btn-circle btn">
          <EllipsisHorizontalIcon className="h-10 w-10 text-white" />
        </button>
      </header>
      <div className="h-full overflow-y-scroll px-4 pe-4">
        <Message fromCurrentUser message="This is a test" status="read" />
      </div>
      <ChatFooter />
    </div>
  )
}
