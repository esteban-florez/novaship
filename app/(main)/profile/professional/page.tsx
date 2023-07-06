import ProfessionalForm from '@/components/profile/professional/ProfessionalForm'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfil profesional',
}

export default function UserProfilePage() {
  return <ProfessionalForm />
}
