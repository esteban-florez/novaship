import CompanyForm from '@/components/profile/company/CompanyForm'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfil empresarial',
}

export default function CompanyProfilePage() {
  return <CompanyForm />
}
