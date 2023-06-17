import AvatarIcon from '@/components/AvatarIcon'
import Subnavbar from '@/components/layout/Subnavbar'
import { EllipsisHorizontalIcon, PlusIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface ChatProps {
  isActive?: boolean
  name: string
  message: string
  lastConnection?: number | null
  chatIsOpen?: boolean
}

function ChatBubble({
  isActive = false,
  name,
  message,
  lastConnection = null,
  chatIsOpen = false,
}: ChatProps) {
  return (
    <button
      className={`mb-3 mt-2 flex w-full flex-row items-center justify-center rounded-md px-2 py-1 text-left text-white hover:bg-white/50 ${
        chatIsOpen ? 'bg-white/50' : ''
      }`}
    >
      <AvatarIcon
        username={name}
        status={isActive}
        showStatus
        usernameLength={2}
        bgColor="white"
      />
      <div className="flex w-4/6 flex-col px-2">
        <h5 className="font-semibold">{name}</h5>
        <p
          className={`truncate text-xs ${
            chatIsOpen ? 'text-neutral-100' : 'text-neutral-300'
          }`}
        >
          {message}
        </p>
      </div>
      <span className="w-1/6 text-xs text-neutral-200">
        {lastConnection !== null ? `${lastConnection} hrs` : ''}
      </span>
    </button>
  )
}

function MessageWasSent() {
  return (
    <div className="flex-center absolute -bottom-5 left-0 gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-4 w-4 fill-white/50"
        fill="none"
        viewBox="0 0 448 512"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
      <span className="text-sm text-white/50">Enviado</span>
    </div>
  )
}

interface MessageReceivedProps {
  isRead?: boolean
}

function MessageWasReceived({ isRead = false }: MessageReceivedProps) {
  return (
    <div className="flex-center absolute -bottom-5 left-0 gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`mx-auto h-4 w-4 ${isRead ? 'fill-white' : 'fill-white/50'}`}
        fill="none"
        viewBox="0 0 448 512"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute -left-2 mx-auto h-4 w-4 ${
          isRead ? 'fill-white' : 'fill-white/50'
        }`}
        fill="none"
        viewBox="0 0 448 512"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
      <span
        className={`text-sm font-semibold ${
          isRead ? 'text-white' : 'text-white/50'
        }`}
      >
        {isRead ? 'Leído' : 'Enviado'}
      </span>
    </div>
  )
}

interface MessageProps {
  orientation: string
  message: string
  status?: string
}

function ChatMessage({ orientation, message, status }: MessageProps) {
  return (
    <div className={`chat ${orientation === 'friend' ? 'chat-start' : 'chat-end'}`}>
      <div className="chat-bubble relative bg-white/50 text-white/80">
        {message}
        {orientation === 'friend' && status === 'sent' && <MessageWasSent />}
        {orientation === 'friend' && status === 'received' && (
          <MessageWasReceived />
        )}
        {orientation === 'friend' && status === 'isRead' && (
          <MessageWasReceived
            isRead
          />
        )}
      </div>
    </div>
  )
}

export default function ChatsPage() {
  return (
    <>
      <Subnavbar options={false} />
      <section className="my-8 flex min-h-[70vh] w-full gap-4 px-8">
        <div className="w-2/6 max-w-xs rounded-xl bg-neutral p-4 pt-2">
          <div className="mb-6 mt-2 flex w-full flex-row justify-around gap-2">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Buscar"
                className="input-bordered input input-sm w-full rounded-full pl-8 focus:ring-1 focus:ring-primary"
              />
              <span className="absolute left-2 top-2 mx-auto">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </span>
            </div>
          </div>

          <ChatBubble
            name="Joseph Monter"
            message="Buenos días, nos comunicamos con usted para informarle que ha sido contrado por la empresa."
            lastConnection={24}
            chatIsOpen
          />
          <ChatBubble
            isActive
            name="Maria Alvarez"
            message="Aún le falta par..."
          />
          <ChatBubble
            name="Julio Santeur"
            message="Texto largo de pruebas para los 3 puntos"
            lastConnection={10}
          />
          <ChatBubble
            name="Usuario relleno"
            message="Texto largo de pruebas para los 3 puntos"
            lastConnection={3}
          />
          <ChatBubble
            name="Usuario relleno"
            message="Texto largo de pruebas para los 3 puntos"
            lastConnection={1}
          />
        </div>
        <div className="w-full flex-col rounded-xl bg-neutral">
          <header className="flex items-center justify-between border-b-2 border-gray-100/25 px-4 py-2 font-bold text-white">
            <div className="flex items-center justify-start gap-2">
              <AvatarIcon username="Joseph Monter" usernameLength={2} bgColor="white" />
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">Joseph Monter</h3>
                <h6 className="text-xs text-neutral-300">
                  Última vez conectado hace 24 horas
                </h6>
              </div>
            </div>
            <button className="btn-ghost btn-circle btn">
              <EllipsisHorizontalIcon className="h-8 w-8 stroke-white" />
            </button>
          </header>
          <main
            className="p-4 "
            style={{
              height: 'calc(75vw - 21rem)',
            }}
          >
            <ChatMessage
              orientation="friend"
              message="Mensaje #1"
              status="isRead"
            />
            <ChatMessage
              orientation="user"
              message="Mensaje #2"
            />
            <ChatMessage
              orientation="friend"
              message="Buenos días, nos comunicamos con usted para informarle que ha
                sido contrado por la empresa."
              status="received"
            />
          </main>
          <footer className="flex items-center justify-between gap-2 border-t-2 border-gray-700 p-4">
            <button className="btn-primary btn-sm btn-circle btn">
              <PlusIcon className="h-6 w-6 stroke-2" />
            </button>
            <textarea
              rows={1}
              className="textarea-md w-full resize-none rounded-full bg-base-200 text-sm font-semibold text-white outline-none focus:ring focus:ring-primary"
              placeholder="Escribe tu mensaje aquí..."
            />
          </footer>
        </div>
      </section>
    </>
  )
}
