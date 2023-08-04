import { type Metadata } from 'next'
import SignUpForm from '@/components/signup/SignUpForm'

export const metadata: Metadata = {
  title: 'Registrarse',
}

export default async function SignUpPage() {
  return (
    <>
      <section className="h-full w-full bg-white">
        <SignUpForm />
      </section>
    </>
  )
}
