import AvatarIcon from '@/components/AvatarIcon'
import Subnavbar from '@/components/layout/Subnavbar'

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
        width={1}
        showStatus
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
        <div className="w-2/6 max-w-[18rem] rounded-xl bg-primary/25 p-4 pt-2">
          <div className="mb-6 mt-2 flex w-full flex-row justify-around gap-2">
            <div className="relative w-5/6">
              <input
                type="search"
                placeholder="Buscar"
                className="input-bordered input input-sm rounded-full bg-white/60 px-[1.75rem] focus:bg-white/80 focus:outline-none"
              />
              <span className="absolute left-2 top-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-4 w-4 fill-white/50"
                  fill="none"
                  viewBox="0 0 512 512"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                  />
                </svg>
              </span>
            </div>
            <button className="btn-ghost btn-sm btn-circle bg-white/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-4 w-4 fill-white"
                fill="none"
                viewBox="0 0 512 512"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                />
              </svg>
            </button>
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
        <div className="w-full flex-col rounded-xl bg-primary/25">
          <header className="flex items-center justify-between border-b-2 border-gray-100/25 px-4 py-2 font-bold text-white">
            <div className="flex items-center justify-start gap-2">
              <AvatarIcon username="Joseph Monter" />
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">Joseph Monter</h3>
                <h6 className="text-xs text-neutral-300">
                  Última vez conectado hace 24 horas
                </h6>
              </div>
            </div>
            <button className="btn-ghost btn-circle btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-white"
                fill="none"
                viewBox="0 0 448 512"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                />
              </svg>
            </button>
          </header>
          <main
            className="p-4 "
            style={{
              height: 'calc(75vw - 21rem)',
            }}
          >
            {/* <div className="chat chat-start">
              <div className="chat-bubble bg-white/50 text-black/80">#fix</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble bg-white/50 text-black/80">#fix</div>
            </div> */}
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
          <footer className="flex items-center justify-between border-t-2 border-gray-100/25">
            <div className="ms-4">
              <button className="btn-sm btn-circle btn border-none bg-primary/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-gray-100/75"
                  fill="none"
                  viewBox="0 0 448 512"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex w-full items-center px-4 py-2">
              <textarea
                rows={1}
                className="textarea-md w-full resize-none rounded-full bg-primary/25 text-sm font-semibold text-white outline-0 focus:bg-white/30"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}
