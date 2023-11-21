import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import AvatarIcon from '../AvatarIcon'

interface Props {
  owner: string
  location: string
  image: string | null
  description?: string
  verification?: boolean
}

export default function InfoUser({
  owner,
  location,
  image,
  description,
  verification = true,
}: Props) {
  return (
    <>
      <div className="mb-2 flex items-center gap-2">
        <AvatarIcon
          image={image}
          className="h-10 w-10 bg-black text-white"
        />
        <div className="mb-2 flex flex-col">
          <p className="text-lg font-semibold">{owner}</p>
          <small className="-my-1 font-semibold text-neutral-600">
            {location}
          </small>
        </div>
      </div>
      <p className="mb-3 line-clamp-3 text-base">{description}</p>
      {verification && (
        <div className="mb-4 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <CheckBadgeIcon className="h-6 w-6 text-secondary" />
            <p className="text-sm font-bold">Empresa verificada</p>
          </div>
        </div>
      )}
    </>
  )
}
