import { capitalizeString } from '@/lib/utils/text'
import clsx from 'clsx'
import Image from 'next/image'

type Props = React.PropsWithChildren<{
  username: string
  image?: string | null
  status?: boolean
  showStatus?: boolean
  bg?: string
  text?: string
  className?: string
}>

export default function AvatarIcon({
  username,
  image = null,
  status = false,
  showStatus = false,
  bg = 'bg-primary',
  text = 'text-white',
  className,
}: Props) {
  const avatarContent = image !== null ? <Image src={image} alt="Foto de perfil" /> : <span>{capitalizeString(username, 2)}</span>

  return (
    <div className={clsx('placeholder avatar', status !== null && 'relative')}>
      <div className={clsx('h-10 w-10 rounded-full', bg, text, className)}>
        {avatarContent}
      </div>
      {showStatus && (
        <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-neutral">
          <span
            className={clsx('absolute left-0.5 top-0.5 h-3 w-3 rounded-full', status ? 'bg-green-300' : 'bg-neutral-200')}
          />
        </span>
      )}
    </div>
  )
}
