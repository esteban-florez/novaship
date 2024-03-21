import AvatarIcon from '@/components/AvatarIcon'
import EmptyContent from '@/components/EmptyContent'
import ExperienceCard from '@/components/profile/ExperienceCard'
import JobCard from '@/components/profile/JobCard'
import ProjectCard from '@/components/profile/ProjectCard'
import { getUserProfileData } from '@/lib/data-fetching/profile'
import {
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  CakeIcon,
  ClipboardDocumentListIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  FireIcon,
  IdentificationIcon,
  InformationCircleIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { format as textFormat } from '@/lib/utils/text'
import { format as dateFormat } from '@/lib/utils/date'
import { type Metadata } from 'next'
import Schedule from '@/components/profile/Schedule'

export const metadata: Metadata = {
  title: 'Perfil de usuario',
}

export default async function ProfileUserId({ params: { id } }: PageContext) {
  const user = await getUserProfileData({ id })

  const {
    name,
    description,
    ci,
    email,
    employable,
    phone,
    image,
    skills,
    grades,
    hirings,
    experiences,
    projects,
    location,
    birth,
    schedule,
  } = user

  return (
    <div className="grid grid-cols-10 gap-4 mt-4 sm:mt-0 sm:px-8 sm:py-4">
      <div className="col-span-10">
        <div className="h-16 w-full rounded-t-xl bg-neutral" />
        <div className="card rounded-t-none bg-white p-4 pt-2 shadow-md">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <AvatarIcon
                image={image}
                className="h-16 w-16"
              />
              <div className="flex flex-col">
                <p className="text-lg sm:text-2xl font-bold">{name}</p>
                {grades.map((grade) => {
                  return (
                    <p
                      className="-mt-1.5 text-base font-bold text-secondary after:content-[','] last:after:content-[]"
                      key={grade.id}
                    >
                      {grade.title}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card col-span-full sm:col-span-5 gap-3 bg-white p-4 shadow-md border border-zinc-300 text-sm">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <DocumentTextIcon className="h-6 w-6 text-neutral-700" />
            <h4 className="text-xl font-bold">Sobre mí</h4>
          </div>
          <p className="text-neutral-600">{description}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <FireIcon className="h-6 w-6 text-neutral-700" />
            <h4 className="text-xl font-bold">Habilidades</h4>
          </div>
          <ul className="mt-1 flex flex-wrap leading-none gap-x-2">
            {skills.map((skill) => {
              return (
                <li
                  key={skill.id}
                  className="my-1 badge badge-outline badge-secondary"
                >
                  {skill.title}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <AcademicCapIcon className="h-6 w-6 text-neutral-700" />
            <h4 className="text-xl font-bold">Títulos</h4>
          </div>
          <ul className="mt-1 flex flex-wrap leading-none gap-x-2">
            {grades.map((grade) => {
              return (
                <li
                  key={grade.id}
                  className="my-1 badge badge-outline badge-secondary"
                >
                  {grade.title}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {employable && schedule !== null && (
        <Schedule schedule={schedule as boolean[][]} />
      )}
      <div className="col-span-full sm:col-span-5 card gap-3 bg-white p-4 shadow-md border border-zinc-300 text-sm">
        <div className="flex items-center gap-3 mb-2">
          <InformationCircleIcon className="h-6 w-6 text-neutral-700" />
          <h4 className="text-xl font-bold">Información de contacto</h4>
        </div>
        <ul className="sm:ms-8 line-clamp-2 flex flex-col gap-4 text-neutral-600 leading-none">
          <li className="flex items-center gap-2">
            <DocumentMagnifyingGlassIcon className="h-5 w-5" />
            <p className="font-semibold text-secondary">
              {employable ? 'En busca de empleo' : 'No busca empleo'}
            </p>
          </li>
          <li className="flex items-center gap-2">
            <IdentificationIcon className="h-5 w-5" />
            <p>{textFormat(ci, 'ci')}</p>
          </li>
          <li className="flex items-center gap-2">
            <EnvelopeIcon className="h-5 w-5" />
            <p>{email}</p>
          </li>
          <li className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5" />
            <p>{location.title}</p>
          </li>
          <li className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5" />
            <p>{textFormat(phone, 'phone')}</p>
          </li>
          <li className="flex items-center gap-2">
            <CakeIcon className="h-5 w-5" />
            <p>{dateFormat({ date: birth })}</p>
          </li>
        </ul>
      </div>
      <div className="col-span-full">
        <div className="flex flex-col gap-3">
          <div className="gap-3 flex flex-col p-4">
            <div className="flex items-center gap-3">
              <BriefcaseIcon className="h-6 w-6 text-neutral-700" />
              <h4 className="text-xl font-bold">Trabajos</h4>
            </div>
            {hirings.length > 0
              ? (
                <ul className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg md:columns-2 lg:columns-3 xl:rounded-tl-none">
                  {hirings.map((hiring) => {
                    return (
                      <li
                        key={hiring.id}
                        className="mb-4 break-inside-avoid"
                      >
                        <JobCard hiring={hiring} />
                      </li>
                    )
                  })}
                </ul>
                )
              : (
                <div className="p-4 rounded-xl border border-solid border-zinc-300 bg-white shadow">
                  <EmptyContent
                    title="No se ha encontrado trabajos aplicados"
                    button={{
                      text: 'Buscar trabajo',
                      url: '/home/offers',
                    }}
                  >
                    No hemos encontrado aplicaciones suyas a ofertas laborales
                  </EmptyContent>
                </div>
                )}
          </div>
          <div className="gap-3 flex flex-col p-4">
            <div className="flex items-center gap-3">
              <ClipboardDocumentListIcon className="h-6 w-6 text-neutral-700" />
              <h4 className="text-xl font-bold">Proyectos</h4>
            </div>
            {projects.length > 0
              ? (
                <ul className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg md:columns-2 lg:columns-3 xl:rounded-tl-none">
                  {projects.map((project) => {
                    const projectTeam =
                    project.team != null
                      ? `Miembros ${project.team._count.memberships}`
                      : 'Personal'

                    const newProject = { ...project, teamwork: projectTeam }

                    return (
                      <li
                        key={project.id}
                        className="mb-4 break-inside-avoid"
                      >
                        <div className="p-4 rounded-xl border border-solid border-zinc-300 bg-white shadow">
                          <ProjectCard project={newProject} />
                        </div>
                      </li>
                    )
                  })}
                </ul>
                )
              : (
                <div className="p-4 rounded-xl border border-solid border-zinc-300 bg-white shadow">
                  <EmptyContent
                    title="No se ha encontrado participación en proyectos"
                    button={{
                      text: 'Forme parte de uno',
                      url: '/home/projects',
                    }}
                  >
                    Actualmente no forma parte o dirige algún proyecto
                  </EmptyContent>
                </div>
                )}
          </div>
          <div className="gap-3 flex flex-col p-4">
            <div className="flex items-center gap-3">
              <BuildingOffice2Icon className="h-6 w-6 text-neutral-700" />
              <h4 className="text-xl font-bold">Experiencia laboral</h4>
            </div>
            {experiences.length > 0
              ? (
                <ul className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg md:columns-2 lg:columns-3 xl:rounded-tl-none">
                  {experiences.map((experience) => {
                    return (
                      <li
                        key={experience.id}
                        className="mb-4 break-inside-avoid"
                      >
                        <ExperienceCard experience={experience} />
                      </li>
                    )
                  })}
                </ul>
                )
              : (
                <div className="p-4 rounded-xl border border-solid border-zinc-300 bg-white shadow">
                  <EmptyContent title="No se ha encontrado experiencias laborales">
                    No ha registrado experiencias previas en su perfil
                  </EmptyContent>
                </div>
                )}
          </div>
        </div>
      </div>
    </div>
  )
}
