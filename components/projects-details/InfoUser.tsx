import AvatarIcon from '../AvatarIcon'
import Button from '../Button'

interface Props {
  owner: string
  email: string
  description: string | null
}

export default function InfoUser({ owner, email, description }: Props) {
  return (
    <>
      <div className="mb-3 flex items-center justify-start gap-2">
        <AvatarIcon username={owner} className="h-14 w-14 bg-black text-white" />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{owner}</p>
          <p className="-my-1 text-sm">{email}</p>
        </div>
      </div>
      <div className="divider mb-2 mt-0" />
      <p className="mb-3 line-clamp-3 text-sm">{description}</p>
      <Button
        style="DEFAULT"
        color="SECONDARY"
        hover="WHITE"
      >
        <p className="text-base">Ver más</p>
      </Button>
    </>
  )
}
