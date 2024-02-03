import AvatarIcon from '@/components/AvatarIcon'
import clsx from 'clsx'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  user: {
    id: string
    name: string
    image: string | null
  }
  subtitle?: string
  sm?: boolean
}>

export default function UserCard({ user, subtitle, sm = false }: Props) {
  return (
    <div className="flex gap-2 items-center rounded-lg">
      <AvatarIcon
        className={clsx(!sm ? 'w-14 h-14' : 'w-8 h-8')}
        image={user.image}
      />
      <div className="flex flex-col justify-center">
        <Link
          href={`/home/person/${user.id}`}
          className={clsx(
            'font-bold tracking-tight underline text-secondary',
            !sm && 'text-xl'
          )}
        >
          {user.name}
        </Link>
        {subtitle !== undefined && (
          <p className="font-semibold tracking-tight line-clamp-1">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
