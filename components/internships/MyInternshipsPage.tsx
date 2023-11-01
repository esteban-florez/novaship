import PageTitle from '@/components/PageTitle'
import InternshipCard from './InternshipCard'
import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
import InternshipList from '@/components/internships/InternshipList'

export const metadata = {
  title: 'Mis pasantías',
}

export default async function MyInternshipsPage({
  searchParams, params: { id: urlId },
}: PageContext & SearchParamsProps) {
  const { id: userId, type, name } = await auth.user()
  const allowed = ['COMPANY', 'INSTITUTE']
  if (!allowed.includes(type) || userId !== urlId) notFound()

  const translation = {
    ADMIN: '',
    PERSON: '',
    COMPANY: 'empresa',
    INSTITUTE: 'institución',
  } as const

  const where = {
    instituteId: type === 'INSTITUTE' ? userId : undefined,
    recruitments: type === 'COMPANY'
      ? {
          some: {
            vacant: {
              companyId: userId,
            },
          },
        }
      : undefined,
  }

  return (
    <>
      <PageTitle
        title="Mis pasantes"
        subtitle={`Aqui puedes ver todos los pasantes de tu ${translation[type]}.`}
        breadcrumbs={name}
      />
      <InternshipList
        component={InternshipCard}
        where={where}
        searchParams={searchParams}
        emptyButton={type === 'INSTITUTE'
          ? {
              url: '/home/internships/select',
              text: 'Añadir pasante',
            }
          : undefined}
      />
    </>
  )
}
