import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import AvatarIcon from '../AvatarIcon'
import Button from '../Button'

interface Props {
  owner: string
  location: string
  description?: string
  verification?: boolean
}

export default function InfoUser({ owner, location, description, verification = true }: Props) {
  return (
    <>
      <div className="mb-2 flex items-center justify-center gap-2">
        <AvatarIcon className="h-14 w-14 bg-black text-white" />
        <div className="mb-2 flex flex-col">
          <p className="text-lg font-semibold">{owner}</p>
          <p className="-my-1 text-center text-sm">{location}</p>
        </div>
      </div>
      <p className="mb-3 line-clamp-3 text-base">{description}</p>
      {verification && (
        <div className="mb-4 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <CheckBadgeIcon className="h-6 w-6 text-secondary" />
            <p className="text-sm">Empresa verificada</p>
          </div>
        </div>
      )}
      <Button
        url="#"
        color="SECONDARY"
      >
        Ver más
      </Button>
    </>
  )
}
