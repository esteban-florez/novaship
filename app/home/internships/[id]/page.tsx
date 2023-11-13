import { auth } from '@/lib/auth/pages'
import { getInternship } from '@/lib/data-fetching/internships'
import { getInternshipCompany, getInternshipStage } from '@/lib/utils/tables'
import { notFound } from 'next/navigation'
import InternshipActions from '@/components/internships/InternshipActions'
import InternshipData from './InternshipData'
import PageTitle from '@/components/PageTitle'
import Recruitments from './Recruitments'
import PersonData from './PersonData'
import InstituteCard from './InstituteCard'
import InternshipStage from './InternshipStage'
import UserCard from '../../../../components/internships/UserCard'
import InternshipProgress from '@/components/internships/InternshipProgress'
import CompletedHoursText from './CompletedHoursText'
import TwoColumnsLayout from '@/components/TwoColumnsLayout'
import Column from '@/components/Column'

export async function generateMetadata({ params: { id } }: PageContext) {
  const internship = await getInternship(id)

  if (internship === null) {
    notFound()
  }

  const { person, grade } = internship

  return {
    title: `${person.name} - ${grade.title}`,
  }
}

export default async function InternshipDetailsPage({ params: { id } }: PageContext) {
  const { id: userId, type } = await auth.user()
  const internship = await getInternship(id)
  if (internship === null) {
    notFound()
  }

  const company = getInternshipCompany(internship)

  const ids = [
    company?.id,
    internship.personId,
    internship.instituteId,
  ]

  const hiddenForPerson = type === 'PERSON' && internship.status === 'REJECTED'

  if (!ids.includes(userId) || hiddenForPerson) {
    notFound()
  }

  const { person, institute, grade, recruitments } = internship
  const stage = getInternshipStage(internship)

  return (
    <>
      <PageTitle
        title="Detalle de pasantía"
        subtitle="Aquí puedes ver todos los datos de la pasantía."
        breadcrumbs={`${person.name} - ${grade.title}`}
      />
      <TwoColumnsLayout>
        <Column>
          {type !== 'PERSON'
            ? (
              <>
                <PersonData person={person} />
                <InternshipData
                  grade={grade}
                  internship={internship}
                  institute={institute}
                />
                <div className="mt-4" />
                <InternshipActions
                  className="lg:flex-row"
                  internship={internship}
                  stage={stage}
                  userType={type}
                />
              </>
              )
            : (
              <>
                <h3 className="text-3xl font-bold text-primary tracking-tighter -mb-2">
                  {grade.title}
                </h3>
                <InternshipData internship={internship} />
                <div className="mt-4" />
                <InternshipActions
                  className="lg:flex-row"
                  internship={internship}
                  stage={stage}
                  userType={type}
                />
                <div className="divider divider-vertical" />
                <InstituteCard institute={institute} />
              </>
              )}
          <div className="divider divider-vertical" />
          <InternshipStage stage={stage} />
        </Column>
        <Column>
          {company === null
            ? (
              <Recruitments recruitments={recruitments} stage={stage} />
              )
            : (
              <>
                <h3 className="font-bold tracking-tighter text-2xl">
                  Empresa de la pasantía
                </h3>
                <div className="bg-neutral-100 p-4 pt-2 rounded-lg mt-4">
                  <UserCard
                    href={`/home/companies/${company.id}`}
                    subtitle={company.location.title}
                    user={company}
                  />
                  <p className="mt-2">{company.description}</p>
                </div>
                <div className="divider divider-vertical" />
                <h3 className="font-bold tracking-tighter text-2xl">
                  Horas completadas
                </h3>
                <CompletedHoursText userType={type} />
                <div className="bg-neutral-100 p-4 rounded-lg mt-2">
                  <InternshipProgress
                    internship={internship}
                    stage={stage}
                  />
                </div>
              </>
              )}
        </Column>
      </TwoColumnsLayout>
    </>
  )
}
