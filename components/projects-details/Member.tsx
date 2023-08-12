import AvatarIcon from '../AvatarIcon'

interface Props {
  name: string
}

export default function Member({ name }: Props) {
  return (
    <div className="flex flex-row gap-2 p-2 hover:bg-gray-200">
      <AvatarIcon username={name} />
      <div className="flex flex-col justify-center">
        <h3 className="font-bold sm:text-base">{name}</h3>
      </div>
    </div>
  )
}
