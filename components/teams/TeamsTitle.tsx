import PageTitle from '@/components/PageTitle'
// import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { type Team } from '@prisma/client'
// import Link from 'next/link'

type Props = React.PropsWithChildren<{
  title: string
  team: Team
}>

export default function TeamsTitle({ title, team }: Props) {
  return (
    <PageTitle
      title={title}
      subtitle={{
        label: 'Equipo',
        name: team.name,
        url: `/home/teams/${team.id}`,
      }}
      breadcrumbs={team.name}
    >
      {/* <Link href={`/home/teams/${team.id}/contracts/create`} className="btn-primary btn">
        <BriefcaseIcon className="h-5 w-5" />
        Contratar equipo
      </Link> */}
    </PageTitle>
  )
}
