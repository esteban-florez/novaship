import PageTitle from '@/components/PageTitle'
import InternshipCard from './InternshipCard'
import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
import InternshipList from '@/components/internships/InternshipList'

export const metadata = {
  title: 'Mis pasantías',
}

export default async function MyInternshipsPage({
  searchParams, params: { id: instituteId },
}: PageContext & SearchParamsProps) {
  const { id: userId, type, name } = await auth.user()
  if (type !== 'INSTITUTE' || userId !== instituteId) notFound()

  return (
    <>
      <PageTitle
        title="Mis pasantes"
        subtitle="Aqui puedes ver todos los pasantes de tu institución."
        breadcrumbs={name}
      />
      <InternshipList
        Component={InternshipCard}
        where={{ instituteId }}
        searchParams={searchParams}
        emptyButton={{
          url: '/home/internships/select',
          text: 'Añadir pasante',
        }}
      />
    </>
  )
}
