import { auth } from '@/lib/auth/pages'
import { type Metadata } from 'next'
import PersonProfile from '@/components/profile/PersonProfile'
import { redirect } from 'next/navigation'
import { getUserProfileData } from '@/lib/data-fetching/profile'

export const metadata: Metadata = {
  title: 'Mi perfil',
}

export default async function ProfilePage() {
  const { id, type } = await auth.user()

  if (type === 'PERSON') {
    const person = await getUserProfileData({ id })

    return <PersonProfile person={person} />
  }

  redirect('home?alert=redirected')
}
