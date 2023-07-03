import { EllipsisHorizontalIcon, FaceSmileIcon, PaperAirplaneIcon, PhotoIcon } from '@heroicons/react/24/solid'
import AvatarIcon from '../AvatarIcon'
import BubbleMessage from './BubbleMessage'

function ChatHeader() {
  return (
    <header className="flex items-center justify-between rounded-t-xl bg-primary px-4 py-2 font-bold">
      <div className="flex items-center justify-start gap-2">
        <AvatarIcon username="Joseph Monter" usernameLength={2} />
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-primary-content sm:text-base">Joseph Monter</h3>
          <h6 className="text-xs text-neutral-300">
            Última vez conectado hace 24 horas.
          </h6>
        </div>
      </div>
      <button className="btn-ghost btn-circle btn hover:bg-gray-300">
        <EllipsisHorizontalIcon className="h-10 w-10" />
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
    <footer className="flex items-start rounded-lg px-3 py-2">
      <button type="button" className="inline-flex justify-center rounded-lg p-2 hover:bg-gray-600 hover:text-primary">
        <PhotoIcon className="h-6 w-6" />
      </button>
      <button type="button" className="rounded-lg p-2 hover:bg-gray-600 hover:text-primary">
        <FaceSmileIcon className="h-6 w-6" />
      </button>
      <textarea rows={1} className="mx-4 w-full resize-y rounded-lg border border-neutral bg-base-200 p-2.5 text-sm focus:outline-none focus:ring focus:ring-primary" placeholder="Escribe tu mensaje aquí..." />
      <button type="submit" className="inline-flex justify-center rounded-full p-2 hover:bg-gray-600 hover:text-primary">
        <PaperAirplaneIcon className="h-6 w-6 hover:fill-primary" />
      </button>
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
