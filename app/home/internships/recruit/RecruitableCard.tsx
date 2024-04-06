import IconData from '@/components/IconData'
import UserCard from '@/components/internships/UserCard'
import { type InternshipWithRelations } from '@/lib/types'
import prisma from '@/prisma/client'
import { AcademicCapIcon, ListBulletIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Skills from './Skills'

type Props = React.PropsWithChildren<{
  internship: InternshipWithRelations
}>

export default async function RecruitableCard({ internship }: Props) {
  const { person, grade } = internship

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
    <div className="card break-inside-avoid bg-white border-l-4 border-primary shadow-md">
      <div className="card-body">
        <div className="mt-2" />
        <UserCard
          user={person}
          subtitle={person.location.title}
          link={`/home/person/${person.id}`}
        />
        <IconData
          label="Carrera en curso:"
          data={grade.title}
          icon={AcademicCapIcon}
        />
        <Skills skills={skills} />
        <Link
          className="btn btn-secondary"
          href={`/home/internships/recruit/${internship.id}`}
        >
          <ListBulletIcon className="h-5 w-5" />
          Ver detalles
        </Link>
      </div>
    </div>
  )
}
