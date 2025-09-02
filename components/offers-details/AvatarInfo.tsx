import AvatarIcon from '../AvatarIcon'

interface Props {
  owner: string
  location: string
}

export default function AvatarInfo({ owner, location }: Props) {
  return (
    <div className="flex items-center gap-2">
      <AvatarIcon className="bg-black text-white" />
      <div className="flex flex-col">
        <h5 className="text-lg font-bold">{owner}</h5>
        <small className="-mt-1 text-sm">{location}</small>
      </div>
    </div>
  )
}
