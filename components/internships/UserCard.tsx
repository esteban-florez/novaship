import AvatarIcon from '@/components/AvatarIcon'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  user: {
    name: string
    image: string | null
  }
  href: string
  subtitle: string
}>

export default function UserCard({ user, href, subtitle }: Props) {
  return (
    <div className="flex gap-2 mt-2 items-center rounded-lg">
      <AvatarIcon className="w-14 h-14" image={user.image} />
      <div className="flex flex-col justify-center">
        <Link href={href} className="text-xl font-bold tracking-tight underline text-secondary">
          {user.name}
        </Link>
        <p className="font-semibold tracking-tight line-clamp-1">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
