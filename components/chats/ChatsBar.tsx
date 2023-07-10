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
  const buttonClasses = 'p-2 flex w-full items-center justify-center rounded-md hover:bg-neutral-200'

  return (
    <button className={`${buttonClasses} ${chatIsOpen ? 'bg-neutral-300' : ''}`}>
      <AvatarIcon
        username={name}
        status={isActive}
        showStatus
      />
      <div className="flex w-4/6 flex-col px-2 text-left">
        <h5 className="font-semibold">{name}</h5>
        <p className="truncate text-xs">
          {message}
        </p>
      </div>
      <span className="w-1/6 text-xs">
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
          className="input input-sm w-full rounded-full bg-base-200 pl-8 text-sm font-semibold shadow-inner outline-none transition-colors delay-150 focus:ring focus:ring-primary"
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
    <div className="w-full rounded-xl bg-white shadow-md sm:w-2/6 sm:max-w-xs xl:max-w-xl">
      <SearchChatInput />

      <div className="flex flex-col gap-3 px-2">
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
