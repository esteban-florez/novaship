import AvatarIcon from '../AvatarIcon'

export default function Member() {
  return (
    <>
      <div className="flex flex-row gap-2">
        <>
          <AvatarIcon username="Myriam Yaqueno" status showStatus />
          <div className="flex flex-col align-middle">
            <h3 className="font-title text-sm font-bold sm:text-base">Myriam Yaqueno</h3>
            <p className="-my-1 line-clamp-6 text-xs">Miembro</p>
          </div>
        </>
      </div>
    </>
  )
}
