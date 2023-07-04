import AvatarIcon from '../AvatarIcon'

interface Props {
  username: string
  time: number
  bg?: string
  children: React.ReactNode
}

export default function Notification({ username, time, children }: Props) {
  return (
    <li className="flex w-80 max-w-xs items-center gap-2 py-1 pe-6 ps-4 last:mb-2 last:pt-1 odd:pb-2 even:pb-2 hover:bg-neutral-focus">
      <AvatarIcon username={username} usernameLength={2} />
      <div className="flex flex-col text-start">
        <p className="line-clamp-2 text-xs normal-case">{children}.</p>
        <small className="text-xs normal-case text-neutral-content">Hace {time} minutos.</small>
      </div>
    </li>
  )
}
