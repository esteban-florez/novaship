import Column from '@/components/Column'
import PageTitle from '@/components/PageTitle'
import TwoColumnsLayout from '@/components/TwoColumnsLayout'
import UserCard from '@/components/internships/UserCard'
import { auth } from '@/lib/auth/pages'
import { getInternship } from '@/lib/data-fetching/internships'
import { notFound } from 'next/navigation'
import prisma from '@/prisma/client'
import {
  AcademicCapIcon,
  CalendarDaysIcon,
  ClockIcon,
  EnvelopeIcon,
  IdentificationIcon,
  InformationCircleIcon,
  ListBulletIcon,
  PhoneIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import IconData from '@/components/IconData'
import { age } from '@/lib/utils/date'
import { genders } from '@/lib/translations'
import { ci, phone } from '@/lib/utils/text'
import Container from '@/components/Container'
import RecruitButton from '../RecruitButton'
import { canCreateRecruitment } from '@/lib/auth/permissions'
import BadgeList from '@/components/BadgeList'
import { validVacants } from '@/lib/utils/tables'
import { getVacants } from '@/lib/data-fetching/vacants'
import DarkUserCard from '@/components/DarkUserCard'
import { tooltip } from '@/lib/tooltip'

export async function generateMetadata({ params: { id } }: PageContext) {
  const internship = await getInternship(id)

  if (internship === null) {
    notFound()
  }

  const { person, grade } = internship

  return {
    title: `Reclutar pasante - ${person.name} - ${grade.title}`,
  }
}

export default async function RecruitDetailsPage({
  params: { id },
}: PageContext) {
  const { id: userId, type } = await auth.user()
  const internship = await getInternship(id)

  if (
    type !== 'COMPANY' ||
    internship === null ||
    !canCreateRecruitment(userId, internship)
  ) {
    notFound()
  }

  const { person, grade, hours, institute } = internship

  const skills = await prisma.skill.findMany({
    where: {
      persons: {
        some: {
          id: person.id,
        },
      },
    },
  })

  const allVacants = await getVacants({
    where: {
      companyId: userId,
    },
  })

  const vacants = validVacants(allVacants)

  return (
    <>
      <PageTitle
        title="Reclutar pasante"
        subtitle={tooltip.internship_recruitment_id}
        breadcrumbs={`${person.name} - ${grade.title}`}
      />
      <TwoColumnsLayout>
        <Column>
          <div className="mt-2" />
          <UserCard
            user={person}
            subtitle={person.location.title}
            // TODO -> profile link
            // href={`/home/persons/${person.id}`}
          />
          <p className="py-2">{person.description}</p>
          <p className="font-bold mb-2">Habilidades:</p>
          <BadgeList items={skills} />
          <div className="flex gap-2 mt-4">
            <RecruitButton
              vacants={vacants}
              internshipId={internship.id}
            />
            <button
              // TODO -> profile link
              //  href={`/home/persons/${person.id}`}
              className="btn btn-secondary"
            >
              <ListBulletIcon className="w-5 h-5" />
              Ver perfil
            </button>
          </div>
          <div className="divider divider-vertical my-1" />
          <p className="font-bold mb-2">Institución:</p>
          <DarkUserCard
            type="INSTITUTE"
            user={institute}
          />
        </Column>
        <Column>
          <Container title="Datos personales:">
            <div className="flex gap-4 justify-around flex-wrap">
              <IconData
                label="Sexo:"
                data={genders[person.gender]}
                icon={UserCircleIcon}
              />
              <IconData
                label="Cédula:"
                data={ci(person.ci)}
                icon={IdentificationIcon}
              />
              <IconData
                label="Edad:"
                data={`${age(person.birth)} años`}
                icon={CalendarDaysIcon}
              />
              <IconData
                label="Teléfono:"
                data={phone(person.phone)}
                icon={PhoneIcon}
              />
              <IconData
                label="Correo:"
                data={person.email}
                icon={EnvelopeIcon}
              />
            </div>
          </Container>
          <div className="mt-4" />
          <Container title="Detalles de pasantía:">
            <div className="flex gap-4 justify-around flex-wrap">
              <IconData
                label="Carrera cursada:"
                data={grade.title}
                icon={AcademicCapIcon}
              />
              <IconData
                label="Horas totales:"
                data={`${hours} horas.`}
                icon={ClockIcon}
              />
            </div>
          </Container>
          <div className="mt-4" />
          <div className="alert">
            <InformationCircleIcon className="h-5 w-5" />
            Tras enviar tu solicitud, deberás esperar a que el estudiante la
            acepte para iniciar la pasantía.
          </div>
        </Column>
      </TwoColumnsLayout>
    </>
  )
}
