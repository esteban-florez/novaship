import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import AvatarIcon from '../AvatarIcon'

interface Props {
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
}: Props) {
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

export default function ChatsBar() {
  return (
    <div className="w-2/6 max-w-xs rounded-xl bg-neutral p-4 pt-2">
      <div className="mb-6 mt-2 flex w-full flex-row justify-around gap-2">
        <div className="relative w-full">
          <input
            type="search"
            placeholder="Buscar"
            className="input-bordered input input-sm w-full rounded-full pl-8 transition-colors delay-150 hover:bg-white focus:ring-1 focus:ring-primary"
          />
          <span className="absolute left-2 top-1.5 mx-auto">
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
  )
}
