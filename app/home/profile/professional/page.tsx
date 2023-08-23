import ProfessionalForm from '@/components/profile/professional/ProfessionalForm'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar perfil profesional',
}

export default async function ProfessionalProfilePage() {
  return <ProfessionalForm />
}
