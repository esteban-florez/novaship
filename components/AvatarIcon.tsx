import { uri } from '@/lib/utils/url'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  image?: string | null
  status?: boolean
  showStatus?: boolean
  className?: string
}>

export default function AvatarIcon({
  image = null,
  status = false,
  showStatus = false,
  className = 'bg-primary text-white',
}: Props) {
  return (
    <div className={clsx('placeholder avatar', status !== null && 'relative')}>
      <div className={clsx('h-10 w-10 rounded-full', className)}>
        <img src={uri(image ?? '/icon.jpg')} alt="Foto de perfil" />
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
