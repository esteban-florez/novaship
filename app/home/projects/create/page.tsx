import CreateProjectForm from '@/components/projects-create/CreateProjectForm'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar proyecto',
}

export default function CreateProjectPage() {
  return (
    <div className="mx-auto px-20 py-10">
      <CreateProjectForm />
    </div>
  )
}
