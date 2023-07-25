import CompanyForm from '@/components/profile/company/CompanyForm'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar empresa',
}

export default function CompanyFormPage() {
  return <CompanyForm />
}
