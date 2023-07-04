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
  const buttonClasses = 'my-2 p-2 flex w-full items-center justify-center rounded-md last:mb-4 hover:bg-neutral-400'

  return (
    <button className={`${buttonClasses} ${chatIsOpen ? 'bg-neutral-400' : ''}`}>
      <AvatarIcon
        username={name}
        status={isActive}
        showStatus
        usernameLength={2}
      />
      <div className="flex w-4/6 flex-col px-2 text-left">
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

function SearchChatInput() {
  return (
    <div className="mb-2 flex w-full flex-row justify-around gap-2 p-4">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Buscar conversación"
          className="input input-sm w-full rounded-full bg-base-200 pl-8 text-sm font-semibold outline-none transition-colors delay-150 focus:ring focus:ring-primary"
        />
        <span className="absolute left-2 top-1.5 mx-auto">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </span>
      </div>
    </div>
  )
}

export default function ChatsBar() {
  return (
    <div className="w-full rounded-xl bg-neutral sm:w-2/6 sm:max-w-xs xl:max-w-xl">
      <SearchChatInput />

      <div className="px-2">
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
    </div>
  )
}
