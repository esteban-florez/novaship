import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import AvatarIcon from '../AvatarIcon'

export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between rounded-t-xl border-b-2 border-white bg-primary px-4 py-2 font-bold">
      <div className="flex items-center justify-start gap-2">
        <div className="rounded-full">
          <AvatarIcon username="Joseph Monter" usernameLength={2} bg="bg-white" text="text-primary" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-primary-content sm:text-base">Joseph Monter</h3>
          <h6 className="text-xs text-neutral-300">
            Última vez conectado hace 24 horas.
          </h6>
        </div>
      </div>
      <button className="btn-ghost btn-circle btn">
        <EllipsisHorizontalIcon className="h-10 w-10 text-white" />
      </button>
    </header>
  )
}
