import Column from '@/components/Column'
import PageTitle from '@/components/PageTitle'
import TwoColumnsLayout from '@/components/TwoColumnsLayout'
import UserCard from '@/components/internships/UserCard'
import { auth } from '@/lib/auth/pages'
import { getInternship } from '@/lib/data-fetching/internships'
import { notFound } from 'next/navigation'
import SkillList from './SkillList'
import prisma from '@/prisma/client'
import { AcademicCapIcon, CalendarDaysIcon, ClockIcon, EnvelopeIcon, IdentificationIcon, InformationCircleIcon, ListBulletIcon, PhoneIcon, PlusIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import IconData from '@/components/IconData'
import { age } from '@/lib/utils/date'
import { genders } from '@/lib/translations'
import { ci, phone } from '@/lib/utils/text'
import Container from './Container'
import AvatarIcon from '@/components/AvatarIcon'

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

export default async function RecruitDetailsPage({ params: { id } }: PageContext) {
  const { id: userId, type } = await auth.user()
  const internship = await getInternship(id)
  const { recruitments } = internship ?? {}

  const notRecruitable = recruitments?.some(recruitment => {
    const hasRecruitment = recruitment.vacant.companyId === userId
    const alreadyRecruited = recruitment.status === 'ACCEPTED'
    return hasRecruitment || alreadyRecruited
  }) ?? true

  if (type !== 'COMPANY' || internship === null ||
    internship.status !== 'ACCEPTED' || notRecruitable
  ) notFound()

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

  return (
    <>
      <PageTitle
        title="Reclutar pasante"
        subtitle="En esta página puedes ver todos los detalles de la pasantía y del pasante antes de reclutarlo." breadcrumbs={`${person.name} - ${grade.title}`}
      />
      <TwoColumnsLayout>
        <Column>
          <UserCard
            user={person}
            subtitle={person.location.title}
            href={`/home/persons/${person.id}`}
          />
          <p className="py-2">{person.description}</p>
          <p className="font-bold mb-2">Habilidades:</p>
          <SkillList skills={skills} />
          <div className="flex gap-2 mt-4">
            <button className="btn btn-primary">
              <PlusIcon className="w-5 h-5" />
              Enviar solicitud
            </button>
            <Link href={`/home/persons/${person.id}`} className="btn btn-secondary">
              <ListBulletIcon className="w-5 h-5" />
              Ver perfil
            </Link>
          </div>
          <div className="divider divider-vertical my-1" />
          <p className="font-bold mb-2">Institución:</p>
          <div className="flex gap-2 items-center bg-neutral text-white p-2 rounded-lg shadow-md">
            <AvatarIcon className="border-2 border-white" image={institute.image} />
            <div>
              <h3 className="font-semibold line-clamp-1">
                {institute.name}
              </h3>
              <Link
                className="underline -mt-1"
                href={`/home/institutes/${institute.id}`}
              >
                Ver perfil
              </Link>
            </div>
          </div>
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
            Tras enviar tu solicitud, deberás esperar a que el estudiante la acepte para iniciar la pasantía.
          </div>
        </Column>
      </TwoColumnsLayout>
    </>
  )
}