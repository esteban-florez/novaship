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
      <div className="my-4 grid grid-cols-1 gap-4 px-8 md:grid-cols-6">
        <div className="md:col-span-4">
          <ProjectDetails />
          <Filter />
          <Archive />
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-col gap-4">
            <div className="flex h-80 flex-col gap-2 rounded-lg bg-neutral-300 p-5" />
            <TeamGroup />
          </div>
        </div>
      </div>
    </>
  )
}
