import { UserMinusIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import AvatarIcon from '../AvatarIcon'
import clsx from 'clsx'

interface Props {
  name: string
  email: string
  action?: 'Add' | 'Remove' | 'Show'
  onClick?: () => void
}

export default function Member({ name, email, action, onClick }: Props) {
  return (
    <div
      className={clsx({
        'group flex justify-between items-center gap-x-2 w-full py-2 transition-colors delay-150 duration-150 hover:bg-primary select-none': true,
        'cursor-pointer border-t border-x last:border-b first:rounded-t-md last:rounded-b-md': action !== 'Show',
        'rounded-md cursor-default': action === 'Show',
      })}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <AvatarIcon username={name} className="bg-primary text-primary-content transition-colors delay-75 duration-75 group-hover:bg-white group-hover:text-primary" />
        <div className="flex flex-col">
          <p className="line-clamp-1 font-semibold transition-colors delay-75 duration-75 group-hover:text-white">{name}</p>
          <p className="-mt-1 text-sm transition-colors delay-75 duration-75 group-hover:text-white">{email}</p>
        </div>
      </div>
      {action === 'Add' && <UserPlusIcon className="hidden h-5 w-5 justify-self-end fill-white transition-colors delay-75 duration-75 group-hover:block" />}
      {action === 'Remove' && <UserMinusIcon className="hidden h-5 w-5 justify-self-end fill-white transition-colors delay-75 duration-75 group-hover:block" />}
    </div>
  )
}
