import AvatarIcon from '../AvatarIcon'

interface Props {
  username: string
  time: number
  children: React.ReactNode
}

export default function Notification({ time, children }: Props) {
  return (
    <li className="flex w-80 max-w-xs cursor-pointer items-center gap-2 py-1 pe-6 ps-4 last:mb-2 last:pt-1 odd:pb-2 even:pb-2 hover:bg-base-300">
      <AvatarIcon />
      <div className="flex flex-col text-start">
        <p className="line-clamp-2 text-sm font-semibold normal-case">{children}.</p>
        <small className="text-sm normal-case">Hace {time} minutos.</small>
      </div>
    </li>
  )
}
