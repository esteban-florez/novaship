import { ArrowRightIcon } from '@heroicons/react/24/outline'
import AvatarIcon from '../AvatarIcon'
import Button from '../Button'

interface Props {
  id: string
  name: string
  description: string
  members?: number
}

export default function InfoOwner({ name, description, id, members }: Props) {
  return (
    <>
      <div className="flex flex-col items-center justify-start gap-2 xl:flex-row">
        <AvatarIcon className="h-12 w-12 bg-black text-white" />
        <div className="mb-2 flex flex-col">
          <p className="text-base font-semibold">{name}</p>
          <p className="-my-1 text-sm">{members} miembros</p>
        </div>
      </div>
      <p className="mb-1 line-clamp-3 text-sm">{description}</p>
      <Button
        url={`/home/teams/${id}`}
        style="DEFAULT"
        color="SECONDARY"
        hover="WHITE"
      >
        Ver equipo
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </>
  )
}
