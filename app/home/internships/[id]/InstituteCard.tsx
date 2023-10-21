import AvatarIcon from '@/components/AvatarIcon'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  institute: {
    id: string
    name: string
    image: string | null
    location: {
      title: string
    }
  }
}>

export default function InstituteCard({ institute }: Props) {
  return (
    <>
      <h3 className="font-bold tracking-tighter text-2xl">
        Universidad de la pasantía
      </h3>
      <div className="flex gap-2 mt-2 rounded-lg">
        <AvatarIcon className="w-14 h-14" image={institute.image} />
        <div className="flex flex-col justify-center">
          <Link href={`/home/institutes/${institute.id}`} className="text-xl font-bold tracking-tight underline text-secondary">
            {institute.name}
          </Link>
          <p className="font-semibold tracking-tight">
            {institute.location.title}
          </p>
        </div>
      </div>
    </>
  )
}
