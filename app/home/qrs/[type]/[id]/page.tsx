import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import Link from 'next/link'

interface Context {
  params: {
    type: string
    id: string
  }
}

export const metadata: Metadata = {
  title: 'Validación de QR',
}

export default async function QrPage({ params: { id, type } }: Context) {
  if (type !== 'internship' && type !== 'team') {
    return (
      <div className="mt-12 w-full flex justify-center">
        <article className="max-w-fit bg-white p-4 m-4 shadow rounded-md flex flex-col gap-3">
          <h2 className="text-3xl font-bold">Este QR es inválido.</h2>
          <Link
            href="/home"
            className="btn btn-primary mx-auto"
          >
            Ir al inicio
          </Link>
        </article>
      </div>
    )
  }

  const record =
    (await prisma.internship.findFirst({
      where: { id },
      select: { id: true },
    })) ??
    (await prisma.team.findFirst({
      where: { id },
      select: { id: true },
    }))

  if (record?.id == null) {
    return (
      <div className="mt-12 w-full flex justify-center">
        <article className="max-w-fit bg-white p-4 m-4 shadow rounded-md flex flex-col gap-3">
          <h2 className="text-3xl font-bold">
            No se encontró ningún certificado enlazado a este QR.
          </h2>
          <Link
            href="/home"
            className="btn btn-primary mx-auto"
          >
            Ir al inicio
          </Link>
        </article>
      </div>
    )
  }

  return (
    <div className="mt-12 w-full flex justify-center">
      <article className="max-w-lg bg-white p-4 m-4 shadow rounded-md flex flex-col gap-3">
        <h2 className="text-3xl font-bold text-center">
          Este QR de "
          {type === 'internship'
            ? 'constancia de pasantía'
            : 'certificado en equipo'}
          " se encuentra verificado por Novaship.
        </h2>
        <Link
          href="/home"
          className="btn btn-primary mx-auto"
        >
          Ir al inicio
        </Link>
      </article>
    </div>
  )
}
