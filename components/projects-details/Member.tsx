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
        'group flex justify-between items-center gap-x-2 w-full py-2 select-none': true,
        'cursor-pointer border-t border-x last:border-b first:rounded-t-md last:rounded-b-md': action !== 'Show',
        'rounded-md cursor-default': action === 'Show',
      })}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <AvatarIcon className="bg-primary text-primary-content" />
        <div className="flex flex-col">
          <p className="line-clamp-1 font-semibold transition-colors">{name}</p>
          <p className="-mt-1 text-sm transition-colors">{email}</p>
        </div>
      </div>
      {action === 'Add' && <UserPlusIcon className="hidden h-5 w-5 justify-self-end fill-white" />}
      {action === 'Remove' && <UserMinusIcon className="hidden h-5 w-5 justify-self-end fill-white" />}
    </div>
  )
}
