import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import AvatarIcon from '../AvatarIcon'
import Button from '../Button'

interface Props {
  avatarInfo: boolean
  owner: string
  location: string
  description: string
}

export default function InfoUser({ avatarInfo = false, owner, location, description }: Props) {
  return (
    <>
      {avatarInfo &&
        <div className="mb-5 flex flex-col items-center justify-center">
          <AvatarIcon username={owner} className="mb-2 h-16 w-16 bg-black text-white" />
          <p className="text-lg font-semibold">{owner}</p>
          <p className="-my-1 text-sm">{location}</p>
        </div>}
      <div className="divider mt-0" />
      <p className="mb-3 line-clamp-4">{description}</p>
      <div className="mb-4 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <CheckBadgeIcon className="h-6 w-6 text-secondary" />
          <p className="text-sm">Empresa verificada</p>
        </div>
        <div className="flex items-center gap-2">
          <CheckBadgeIcon className="h-6 w-6 text-secondary" />
          <p className="text-sm">1 oferta idk</p>
        </div>
      </div>
      <Button
        style="DEFAULT"
        color="SECONDARY"
        hover="WHITE"
        width="w-full"
      >
        Ver más
      </Button>
    </>
  )
}
