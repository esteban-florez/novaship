import SignUpForm from '@/components/signup/SignUpForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Registrarse',
}

export default async function SignUpPage() {
  const skills = await prisma.skill.findMany({
    select: { id: true, title: true },
  })

  const jobs = await prisma.job.findMany()
  const locations = await prisma.location.findMany()
  const categories = (await prisma.category.findMany())
    .map(({ id, title }) => ({ id, title, selected: false }))

  return (
    <>
      <img src="/coso3.webp" alt="Imagen decorativa en esquinas" className="pointer-events-none fixed left-0 top-0 block h-1/4 w-full lg:hidden" />
      <img src="/coso4.webp" alt="Imagen decorativa en esquinas" className="pointer-events-none fixed left-0 top-0 hidden h-full w-1/3 lg:block" />
      <section className="flex h-screen flex-col gap-6 lg:flex-row">
        <section className="z-10 flex flex-col justify-center lg:w-1/4 lg:p-4">
          <div className="rounded-b-2xl bg-white/10 p-3 shadow-lg backdrop-blur-sm md:p-6 lg:rounded-2xl">
            <div className="flex items-center justify-center gap-2 lg:flex-col lg:items-start">
              <div className="flex flex-col">
                <h2 className="mb-3 text-center font-bold text-white md:text-xl lg:text-2xl">
                  ¿Ya tienes una cuenta?
                </h2>
                <Link href="/auth/login" className="btn-sm btn -mt-1 flex bg-white lg:hidden lg:text-base">
                  Inicia sesión
                </Link>
              </div>
              <img src="/undraw_summer.webp" alt="Imagen de trabajo remoto" className="z-50 grid h-auto w-24 place-items-end lg:w-48" />
            </div>
            <Link href="/auth/login" className="btn -mt-1 hidden bg-white lg:flex lg:text-base">
              Inicia sesión
            </Link>
          </div>
        </section>
        <section className="grid w-full place-items-center p-4 lg:w-3/4">
          {/* TODO -> refactorizar este componente con composición */}
          <SignUpForm
            jobs={jobs}
            categories={categories}
            skills={skills}
            locations={locations}
          />
        </section>
      </section>
    </>
  )
}
