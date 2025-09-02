import { type UserType } from '@prisma/client'
import AvatarIcon from './AvatarIcon'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  user: {
    image: string | null
    name: string
    id: string
  }
  type: UserType
  link: string
}>

export default function DarkUserCard({
  user: { image, name },
  type,
  link,
}: Props) {
  if (type === 'ADMIN') {
    return
  }

  // const segment = type === 'COMPANY' ? 'companies' : type.toLowerCase() + 's'

  return (
    <div className="flex gap-2 items-center bg-neutral text-white p-2 rounded-lg shadow-md">
      <AvatarIcon
        className="border-2 border-white"
        image={image}
      />
      <div>
        <h3 className="font-semibold line-clamp-1">{name}</h3>
        <Link
          className="underline -mt-1"
          href={link}
        >
          Ver perfil
        </Link>
      </div>
    </div>
  )
}
