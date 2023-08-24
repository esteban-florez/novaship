import { type Membership, type Person, type Project } from '@prisma/client'
import Archive from './Archive'
import Filter from './Filter'
import ProjectDetails from './ProjectDetails'
import TeamGroup from './TeamGroup'
import { type OptionPerson } from '@/lib/types'

interface Props {
  owner: Person
  project: (Project & {
    memberships: Array<Membership & {
      person: Person
    }>
    person: Person | null
  })
  persons: OptionPerson[]
}

export default function PageContent({ owner, project, persons }: Props) {
  return (
    <div className="my-4 grid grid-cols-10 gap-4 px-6 ">
      <div className="col-span-10 lg:col-span-7">
        <ProjectDetails project={project} />
        <Filter projectId={project?.id ?? ''} />
        <Archive />
      </div>
      <div className="col-span-10 gap-4 sm:w-auto lg:col-span-3 lg:flex lg:flex-col">
        <div className="mb-4 flex h-72 flex-col gap-2 rounded-lg bg-neutral-300 p-5 sm:mb-0" />
        <TeamGroup
          id={project?.id ?? ''}
          memberships={project?.memberships}
          isOwner={owner.id === project?.personId}
          persons={persons}
        />
      </div>
    </div>
  )
}
