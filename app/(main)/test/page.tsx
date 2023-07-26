import TestForm from './TestForm'

export const metadata = {
  title: 'Test',
}

export default async function TestPage() {
  return (
    <main className="p-4">
      <TestForm />
    </main>
  )
}
