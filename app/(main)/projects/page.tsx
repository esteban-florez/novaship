import Subnavbar from '@/components/layout/Subnavbar'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos',
}

export default function ProjectsPage() {
  return (
    <>
      <Subnavbar options />
      <h2>Projects</h2>
    </>
  )
}
