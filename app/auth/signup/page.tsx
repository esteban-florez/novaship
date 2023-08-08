import { type Metadata } from 'next'
import SignUpForm from '@/components/signup/SignUpForm'
import prisma from '@/prisma/client'

export const metadata: Metadata = {
  title: 'Registrarse',
}

export default async function SignUpPage() {
  const fields = await prisma.field.findMany({
    select: {
      id: true,
      title: true,
    },
  })
  const selectableFields = fields.map(field => {
    return {
      ...field,
      selected: false,
    }
  })

  return (
    <section className="h-full w-full bg-white">
      <SignUpForm fields={selectableFields} />
    </section>
  )
}
