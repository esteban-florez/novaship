import Archive from '@/components/projects-details/Archive'
import ProjectDetails from '@/components/projects-details/ProjectDetails'
import Filter from '@/components/projects-details/Filter'
import TeamGroup from '@/components/projects-details/Team'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Detalles de Proyecto',
}

export default function ProjectsPage() {
  return (
    <>
      <div className="my-4 grid grid-cols-10 gap-4 px-6">
        <div className="col-span-10 lg:col-span-7">
          <ProjectDetails />
          <Filter />
          <Archive />
        </div>
        <div className="hidden gap-4 lg:col-span-3 lg:flex lg:flex-col">
          <div className="flex h-72 flex-col gap-2 rounded-lg bg-neutral-300 p-5" />
          <TeamGroup />
        </div>
      </div>
    </>
  )
}
