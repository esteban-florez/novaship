import { type Metadata } from 'next'
import SignUpForm from '@/components/signup/SignUpForm'

export const metadata: Metadata = {
  title: 'Registrarse',
}

export default async function SignUpPage() {
  return (
    <>
      <section className="z-10 mx-2 flex flex-col rounded-xl bg-base-100 px-4 py-6 shadow-md md:px-8">
        <SignUpForm />
      </section>
    </>
  )
}
