import Nav from '@/components/projects/Nav'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos',
}

export default function ProjectsPage() {
  return (
    <>
      <div className="mb-4 px-8">
        <Nav />
      </div>
    </>
  )
}
