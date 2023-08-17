import UserForm from '@/components/profile/user/UserForm'
// TODO
// import { auth } from '@/lib/auth/pages'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfil de usuario',
}

export default async function UserProfilePage() {
  // const person = await auth.person()

  return (
    // <UserForm user={person} />
    <UserForm />
  )
}
