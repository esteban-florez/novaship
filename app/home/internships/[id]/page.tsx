import { getInternship } from '@/lib/data-fetching/internships'
import { notFound } from 'next/navigation'

export default function InternshipDetailsPage({ params: { id } }: PageContext) {
  const internship = getInternship(id)

  if (internship === null) {
    notFound()
  }

  return (
    <h1>Hello</h1>
  )
}
