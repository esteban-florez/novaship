import Link from 'next/link'

type Props = React.PropsWithChildren<{
  description: string
  owner: string
  ubication: string
}>

export default function Content({ description, owner, ubication }: Props) {
  return (
    <main className="px-6 py-4">
      <p className="line-clamp-6 text-sm">{description}</p>
      <div className="flex flex-col justify-between gap-4 rounded-b-lg pt-4 sm:flex-row">
        <div className="flex flex-row items-center justify-start gap-2 sm:justify-center">
          <div className="placeholder avatar">
            <div className="h-8 w-8 rounded-full bg-neutral" />
          </div>
          <div className="flex flex-col">
            <h5 className="font-title text-sm font-bold">{owner}</h5>
            <small className="-mt-1 text-xs">{ubication}</small>
          </div>
        </div>
        <Link href="/home/offers/offer" className="btn-warning btn-sm btn w-full text-xs sm:w-2/6">
          Ver más
        </Link>
      </div>
    </main>
  )
}
