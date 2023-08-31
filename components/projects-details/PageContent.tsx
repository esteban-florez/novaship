import {
  type Task, type Membership,
  type Person, type Project,
  type Subtask, type Participation,
  type Field,
} from '@prisma/client'
import { type OptionPerson } from '@/lib/types'
import ProjectDetails from './ProjectDetails'
import TeamGroup from './TeamGroup'
import InfoUser from './InfoUser'
import Filter from './Filter'

interface Props {
  isOwner: boolean
  owner: Person
  project: (Project & {
    person: Person | null
    fields: Field[]
    memberships: Array<Membership & {
      person: Person
    }>
    tasks: Array<Task & {
      subtasks: Subtask[]
      participations: Participation[]
    }>
  })
  persons: OptionPerson[]
}

export default function PageContent({ isOwner, owner, project, persons }: Props) {
  const projectFields = project.fields.map(field => {
    return field.title
  })

  return (
    <section className="px-6 py-4">
      {/* TODO -> arreglar los tamaños y cambiar "Equipo de trabajo" */}
      {/* La info del usuario podria estar dentro del card (?) */}
      {/* Equipo de trabajo podria estar dentro del card tambien (?) */}
      <div className="grid grid-cols-10 gap-4 ">
        <div className="col-span-10 lg:col-span-7">
          <ProjectDetails
            id={project.id}
            isOwner={isOwner}
            title={project.title}
            fields={projectFields}
            description={project.description}
          />
        </div>
        <div className="col-span-10 lg:col-span-3 lg:block">
          <div className="card mb-4 bg-white p-4 shadow-md lg:self-start">
            <InfoUser
              owner={project.person?.name ?? ''}
              email={project.person?.email ?? ''}
              description={project.person?.description ?? ''}
            />
          </div>
          <TeamGroup
            id={project?.id ?? ''}
            memberships={project?.memberships}
            isOwner={owner.id === project?.personId}
            persons={persons}
          />
        </div>
      </div>
      <div className="grid-cols-10 gap-4">
        {isOwner && <Filter id={project.id} tasks={project.tasks} />}
      </div>
    </section>
  )
}
