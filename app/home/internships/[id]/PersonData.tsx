import AvatarIcon from '@/components/AvatarIcon'
import { ListBulletIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  person: {
    id: string
    name: string
    email: string
    image: string | null
  }
}>

export default function PersonData({ person }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <AvatarIcon image={person.image} className="w-14 h-14" />
        <div>
          <h1 className="font-bold tracking-tighter text-2xl">
            {person.name}
          </h1>
          <p className="font-semibold text-primary text-lg -mt-2">
            {person.email}
          </p>
        </div>
      </div>
      <Link
        className="btn btn-square btn-secondary"
        href={`/home/persons/${person.id}`}
      >
        <ListBulletIcon className="h-5 w-5" />
      </Link>
    </div>
  )
}
