import AvatarIcon from '@/components/AvatarIcon'

type Props = React.PropsWithChildren<{
  person: {
    name: string
    email: string
    image: string | null
  }
}>

export default function PersonData({ person }: Props) {
  return (
    <div className="flex items-center gap-2">
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
  )
}
