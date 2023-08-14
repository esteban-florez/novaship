import AvatarIcon from '@/components/AvatarIcon'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  description: string
  owner: string
  ubication: string
}>

export default function Content({ description, owner, ubication }: Props) {
  return (
    <main className="flex w-full flex-col gap-3 p-4">
      <p className="line-clamp-6">{description}</p>
      <div className="divider my-0" />
      <div className="flex items-center gap-2">
        <AvatarIcon username="Myriam" />
        <div className="flex flex-col">
          <h5 className="text-sm font-bold">{owner}</h5>
          <small className="-mt-1 text-xs">{ubication}</small>
        </div>
      </div>
      <Link href="/home/offers/offer" className="btn-secondary btn-sm btn w-full text-sm">
        Ver más
      </Link>
    </main>
  )
}
