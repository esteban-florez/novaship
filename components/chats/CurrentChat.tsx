import { EllipsisHorizontalIcon, PlusIcon } from '@heroicons/react/24/solid'
import AvatarIcon from '../AvatarIcon'
import BubbleMessage from './BubbleMessage'

function ChatHeader() {
  return (
    <header className="flex items-center justify-between rounded-t-xl border-b-2 border-gray-100/25 bg-primary/50 px-4 py-2 font-bold text-white">
      <div className="flex items-center justify-start gap-2">
        <AvatarIcon username="Joseph Monter" usernameLength={2} />
        <div className="flex flex-col">
          <h3 className="sm:text-md text-xl font-semibold">Joseph Monter</h3>
          <h6 className="text-xs text-neutral-300">
            Última vez conectado hace 24 horas
          </h6>
        </div>
      </div>
      <button className="btn-ghost btn-circle btn">
        <EllipsisHorizontalIcon className="h-8 w-8 stroke-white" />
      </button>
    </header>
  )
}

function ChatContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col justify-end px-4"
      style={{
        height: 'calc(75vw - 21rem)',
      }}
    >
      <div className="h-full overflow-y-auto pe-2">
        {children}
      </div>
    </div>
  )
}

function ChatFooter() {
  return (
    <footer className="flex items-center justify-between gap-2 border-t-2 border-gray-700 bg-primary/10 p-4">
      <button className="btn-primary btn-sm btn-circle btn">
        <PlusIcon className="h-6 w-6 stroke-2" />
      </button>
      <textarea
        rows={1}
        className="textarea-md w-full resize-none rounded-full bg-base-200 text-sm font-semibold text-white outline-none focus:ring focus:ring-primary"
        placeholder="Escribe tu mensaje aquí..."
      />
    </footer>
  )
}

export default function CurrentChat() {
  return (
    <div className="hidden flex-col rounded-xl bg-neutral sm:block sm:w-full">
      <ChatHeader />
      <ChatContent>
        <BubbleMessage message="Buenos días, nos comunicamos con usted para acordar la entrevista para la oferta" status="isRead" />
        <BubbleMessage message="This is a test" status="isRead" />
        <BubbleMessage fromCurrentUser message="This is a test" status="isRead" />
        <BubbleMessage message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto tenetur, temporibus commodi dolorum sunt nemo expedita. Qui eius cupiditate exercitationem? Culpa ducimus amet quaerat aliquam fugiat? Obcaecati non dolores soluta?" status="isSent" />
        <BubbleMessage message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto tenetur, temporibus commodi dolorum sunt nemo expedita. Qui eius cupiditate exercitationem? Culpa ducimus amet quaerat aliquam fugiat? Obcaecati non dolores soluta?" status="isSent" />
        <BubbleMessage message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto tenetur, temporibus commodi dolorum sunt nemo expedita. Qui eius cupiditate exercitationem? Culpa ducimus amet quaerat aliquam fugiat? Obcaecati non dolores soluta?" status="isSent" />
        <BubbleMessage message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto tenetur, temporibus commodi dolorum sunt nemo expedita. Qui eius cupiditate exercitationem? Culpa ducimus amet quaerat aliquam fugiat? Obcaecati non dolores soluta?" status="isSent" />
        <BubbleMessage message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto tenetur, temporibus commodi dolorum sunt nemo expedita. Qui eius cupiditate exercitationem? Culpa ducimus amet quaerat aliquam fugiat? Obcaecati non dolores soluta?" status="isSent" />
        <BubbleMessage message="This is a test" status="isRead" />
        <BubbleMessage message="This is a test" status="isRead" />
        <BubbleMessage message="This is a test" status="isRead" />
        <BubbleMessage message="This is a test" status="isRead" />
        <BubbleMessage message="This is a test" status="isRead" />
        <BubbleMessage message="This is a test" status="isRead" />
        <BubbleMessage fromCurrentUser message="Prueba #1" status="isReceived" />
        <BubbleMessage fromCurrentUser message="Prueba #2" status="isSent" />
      </ChatContent>
      <ChatFooter />
    </div>
  )
}
