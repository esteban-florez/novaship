import ProjectForm from '@/components/projects/ProjectForm'
import selectable from '@/lib/data-fetching/selectable'
import { type SelectablePerson, type SelectableSkill } from '@/lib/types'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar proyecto',
}

export default async function CreateProjectPage() {
  const fields = await selectable<SelectableSkill>({ model: 'field' })
  const persons = await selectable<SelectablePerson>({ model: 'person' })

  return (
    <ProjectForm
      action="/api/projects"
      method="POST"
      fields={fields}
      persons={persons}
    />
  )
}
