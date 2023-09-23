import Message from './Message'
import { FaceSmileIcon, PaperAirplaneIcon, PhotoIcon } from '@heroicons/react/24/solid'
import {
  type Team,
  type Membership,
  type Person,
  type Project,
  type Company,
  type Message as MessageType,
} from '@prisma/client'
// import AvatarIcon from '../AvatarIcon'

type Props = React.PropsWithChildren<{
  project: Project & {
    team: Team & {
      memberships: Array<Membership & {
        person: Person | null
        company: Company | null
        messages: MessageType[]
      }>
    }
  }
}>

export default function CurrentChat({ project }: Props) {
  return (
    <div className="chat-grid hidden flex-col bg-white shadow-lg sm:grid sm:w-full">
      <header className="flex flex-col border-b border-neutral-300 px-4 py-1.5 shadow">
        <h3 className="text-base font-semibold sm:text-2xl">
          # General
        </h3>
        <span className="-mt-2 text-sm text-neutral-500">Creado el 9/09/2023</span>
      </header>

      <div className="h-full px-4 pe-4 scrollbar">
        <Message fromCurrentUser message="This is a test" status="read" />
      </div>

      <footer className="flex items-center border-t border-neutral-300 px-3">
        <button type="button" className="inline-flex justify-center rounded-lg p-2 text-primary transition-colors hover:bg-primary hover:text-white">
          <PhotoIcon className="h-7 w-7" />
        </button>
        <button type="button" className="rounded-lg p-2 text-primary transition-colors hover:bg-primary hover:text-white">
          <FaceSmileIcon className="h-7 w-7" />
        </button>
        <textarea rows={1} className="mx-4 w-full resize-none rounded-lg border border-neutral-200 bg-base-100 p-2 shadow-inner transition-all focus:outline-none focus:ring focus:ring-primary" placeholder="Escribe tu mensaje aquí..." />
        <button type="submit" className="inline-flex justify-center rounded-full p-2 text-primary transition-colors hover:bg-primary hover:text-white">
          <PaperAirplaneIcon className="h-7 w-7" />
        </button>
      </footer>
    </div>
  )
}
