import InternshipCard from './InternshipCard'
import PageTitle from '@/components/PageTitle'
import InternshipList from '@/components/internships/InternshipList'
import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'

export default async function MyInternshipsPage({
  params: { id: personId },
  searchParams,
}: PageContext & SearchParamsProps) {
  const { id: userId, type, name } = await auth.user()
  if (type !== 'PERSON' && userId !== personId) notFound()

  return (
    <>
      <PageTitle
        title="Mis pasantías"
        subtitle="Aqui puedes ver todas tus pasantías."
        breadcrumbs={name}
      />
      <InternshipList
        component={InternshipCard}
        searchParams={searchParams}
        where={{
          NOT: {
            status: 'REJECTED',
          },
          personId,
        }}
      />
    </>
  )
}
