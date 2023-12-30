import { auth } from '@/lib/auth/pages'
import { type Metadata } from 'next'
import PersonProfile from '@/components/profile/PersonProfile'
import { redirect } from 'next/navigation'
import {
  getCompanyProfileData,
  getUserProfileData,
} from '@/lib/data-fetching/profile'
import CompanyProfile from '@/components/profile/CompanyProfile'

export const metadata: Metadata = {
  title: 'Mi perfil',
}

export default async function ProfilePage() {
  const { id, type } = await auth.user()

  if (type === 'PERSON') {
    const person = await getUserProfileData({ id })

    return <PersonProfile person={person} />
  }

  if (type === 'COMPANY') {
    const company = await getCompanyProfileData({ id })

    return <CompanyProfile company={company} />
  }

  redirect('home?alert=redirected')
}
