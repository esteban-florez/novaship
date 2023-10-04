import clsx from 'clsx'
import Image from 'next/image'

type Props = React.PropsWithChildren<{
  username: string
  image?: string | null
  status?: boolean
  showStatus?: boolean
  className?: string
}>

function initials(str: string, length: number) {
  const capitalizedString = str.replace(/[^A-Z]+/g, '')

  return capitalizedString.slice(0, length)
}

export default function AvatarIcon({
  username,
  image = null,
  status = false,
  showStatus = false,
  className = 'bg-primary text-white',
}: Props) {
  const avatarContent = image !== null
    ? <Image src={image} alt="Foto de perfil" width="10" height="10" />
    : <span>{initials(username, 2)}</span>

  return (
    <div className={clsx('placeholder avatar', status !== null && 'relative')}>
      <div className={clsx('h-10 w-10 rounded-full', className)}>
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
