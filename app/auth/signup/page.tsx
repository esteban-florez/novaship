import { type Metadata } from 'next'
import SignUpForm from '@/components/signup/SignUpForm'

export const metadata: Metadata = {
  title: 'Registrarse',
}

export default async function SignUpPage() {
  return (
    <>
      <section className="h-screen w-screen bg-white">
        <SignUpForm />
      </section>
    </>
  )
}
