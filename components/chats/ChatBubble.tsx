import clsx from 'clsx'
import AvatarIcon from '../AvatarIcon'

type Props = React.PropsWithChildren<{
  isActive?: boolean
  name: string
  message: string
  lastConnection?: number | null
  chatIsOpen?: boolean
}>

export default function ChatBubble({
  isActive = false,
  name,
  message,
  lastConnection = null,
  chatIsOpen = false,
}: Props) {
  return (
    // BUG -> arreglar el css para que funcione bien aún cuando no se renderiza el <span> de última conexión
    <button className={clsx('flex w-full items-center justify-center rounded-md p-2 hover:bg-neutral-200', chatIsOpen && 'bg-neutral-300')}>
      <AvatarIcon
        username={name}
        status={isActive}
        showStatus
      />
      <div className="flex w-4/6 flex-col px-2 text-left">
        <h5 className="font-semibold">{name}</h5>
        <p className="truncate text-sm">
          {message}
        </p>
      </div>
      {lastConnection !== null && (
        <span className="w-1/6 text-sm">
          {lastConnection} hrs
        </span>
      )}
    </button>
  )
}
