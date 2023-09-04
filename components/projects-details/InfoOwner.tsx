import { ArrowRightIcon } from '@heroicons/react/24/outline'
import AvatarIcon from '../AvatarIcon'
import Button from '../Button'

interface Props {
  owner: string
  email: string
  description: string | null
}

export default function InfoOwner({ owner, email, description }: Props) {
  return (
    <>
      <div className="flex items-center justify-start gap-2">
        <AvatarIcon username={owner} className="h-12 w-12 bg-black text-white" />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{owner}</p>
          <p className="-my-1 text-sm">{email}</p>
        </div>
      </div>
      <p className="mb-1 line-clamp-3 text-sm">{description}</p>
      <Button
        style="OUTLINE"
        color="SECONDARY"
        hover="WHITE"
      >
        <p className="text-black">Ver más</p>
        <ArrowRightIcon className="h-4 w-4 text-black" />
      </Button>
    </>
  )
}
