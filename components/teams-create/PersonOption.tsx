import AvatarIcon from '../AvatarIcon'
import { type Person } from '@prisma/client'

type Props = React.PropsWithChildren<{
  person: Person
}>

export default function PersonOption({ person }: Props) {
  return (
    <div className="mx-4 my-2 flex gap-2 rounded-lg p-2 transition-all hover:cursor-pointer hover:bg-neutral-200">
      <AvatarIcon image={person.image} />
      <div className="flex-col">
        <h4 className="font-semibold">{person.email}</h4>
        <p className="text-neutral-700">{person.name}</p>
      </div>
    </div>
  )
}
