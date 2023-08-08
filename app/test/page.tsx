import TestForm from './TestForm'
import prisma from '@/prisma/client'

export default async function TestPage() {
  const locations = await prisma.location.findMany()

  return (
    <TestForm locations={locations} />
  )
}
