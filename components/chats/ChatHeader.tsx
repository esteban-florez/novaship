import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import AvatarIcon from '../AvatarIcon'

interface Props {
  members: string[]
}

export default function ChatHeader({ members }: Props) {
  return (
    <header className="flex items-center justify-between border-b-2 border-white bg-primary px-4 py-3 font-bold">
      <div className="flex items-center justify-start gap-2">
        <AvatarIcon username="Joseph Monter" className="bg-white text-primary" />
        <h3 className="text-xl font-semibold text-primary-content sm:text-base">Joseph Monter</h3>
      </div>
      <button className="btn-ghost btn-circle btn">
        <EllipsisHorizontalIcon className="h-10 w-10 text-white" />
      </button>
    </header>
  )
}
