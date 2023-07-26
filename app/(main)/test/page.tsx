import { validateUser } from '@/lib/auth'
import TestForm from './TestForm'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Test',
}

export default async function TestPage() {
  const { session } = await validateUser()

  if (session === null) {
    redirect('/auth/login')
  }

  return (
    <main className="p-4">
      <TestForm />
    </main>
  )
}
