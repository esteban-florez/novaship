import InstituteForm from '@/components/profile/institute/InstituteForm'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfil institucional',
}

export default function InstituteProfilePage() {
  return <InstituteForm />
}
