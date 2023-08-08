import AvatarIcon from '../AvatarIcon'

interface Props {
  name: string
}

export default function Member({ name }: Props) {
  return (
    <div className="flex flex-row gap-2">
      <>
        <AvatarIcon username="Myriam Yaqueno" status showStatus />
        <div className="flex flex-col align-middle">
          <h3 className="font-bold sm:text-base">{name}</h3>
          {/* <p className="-my-1 line-clamp-6 text-sm">Miembro</p> */}
        </div>
      </>
    </div>
  )
}
