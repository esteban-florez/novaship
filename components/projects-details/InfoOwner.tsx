import { ArrowRightIcon } from '@heroicons/react/24/outline'
import AvatarIcon from '../AvatarIcon'
import Button from '../Button'

interface Props {
  name: string
  description: string
}

export default function InfoOwner({ name, description }: Props) {
  return (
    <>
      <div className="flex flex-col items-center justify-start gap-2 xl:flex-row">
        <AvatarIcon username={name} className="h-12 w-12 bg-black text-white" />
        <p className="text-center text-base font-semibold xl:text-start">{name}</p>
      </div>
      <p className="mb-1 line-clamp-3 text-sm">{description}</p>
      <Button
        style="DEFAULT"
        color="SECONDARY"
        hover="WHITE"
      >
        Ver perfil
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </>
  )
}
