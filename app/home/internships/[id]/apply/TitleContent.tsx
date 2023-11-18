import Link from 'next/link'

type Props = React.PropsWithChildren<{
  isPerson: boolean
  internshipId: string
  grade: string
  person: string
}>

export default function TitleContent({ isPerson, internshipId, grade, person }: Props) {
  return (
    <div className="bg-primary rounded-lg shadow-md p-4 text-white">
      <span>{isPerson ? 'Pasantía: ' : 'Pasante: '}</span>
      <Link
        className="underline font-semibold"
        href={`/home/internships/${internshipId}`}
      >
        {isPerson ? grade : person}
      </Link>
    </div>
  )
}
