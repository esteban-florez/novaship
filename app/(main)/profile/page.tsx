import ProfileForms from '@/components/profile/ProfileForms'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfil',
}

export default function ProfilePage() {
  return (
    <section className="my-4 p-4 lg:px-16 lg:py-8">
      <ProfileForms />
    </section>
  )
}
