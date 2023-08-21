// import AvatarIcon from '@/components/AvatarIcon'
// import { ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
// import PageContent from '@/components/offers-details/pageContent'
import AvatarIcon from '@/components/AvatarIcon'
import Button from '@/components/Button'
import prisma from '@/prisma/client'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Desarrollador Web Front-End',
}

interface Context {
  params: { id: string }
}

export default async function OfferPage({ params: { id } }: Context) {
  if (id === null) {
    redirect('/home/offers')
  }

  const offer = await prisma.offer.findUnique({
    where: {
      id,
    },
    include: {
      company: true,
      location: true,
      fields: true,
      skills: true,
    },
  })

  return (
    <>
      <section className="grid grid-cols-7 gap-4 p-4">
        <div className="col-span-5">
          <div className="card bg-white p-4 shadow-xl">
            {/* Imagen */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="text-base font-bold sm:text-2xl">{offer?.title}</h3>
                <p className="-mt-1 text-base text-primary">Arquitectura</p>
              </div>
              <div className="flex flex-col">
                <p className="text-base">Expira en: {offer?.expiresAt?.getDate()} días</p>
                <p className="-mt-1 text-base">Límite: {offer?.limit}</p>
              </div>
            </div>
            <p className="line-clamp-6 py-3">{offer?.description}</p>
            <div className="flex w-full justify-between lg:w-auto">
              <Button
                url="/home/offers"
                style="DEFAULT"
                color="WHITE"
                hover="PRIMARY"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Volver al listado
              </Button>
              <Button
                style="DEFAULT"
                color="PRIMARY"
                hover="WHITE"
              >
                ¡Quiero Aplicar!
              </Button>
            </div>
          </div>
          <div className="mt-4 flex columns-2 gap-3">
            <div className="card w-full bg-white p-4 shadow-lg">Pasante</div>
            <div className="card w-full bg-white p-4 shadow-lg">Remoto</div>
            <div className="card w-full bg-white p-4 shadow-lg">Horas</div>
            <div className="card w-full bg-white p-4 shadow-lg">Salario</div>
          </div>
          <div className="card mt-4 bg-white p-4 shadow-lg">Habilidades</div>
        </div>
        <div className="col-span-2">
          <div className="card bg-white p-4 shadow-md lg:self-start">
            <div className="flex items-center gap-2">
              <AvatarIcon username="Pedro Lopez" className="bg-black text-white" />
              <div className="flex flex-col">
                <h5 className="text-base font-bold">{offer?.company.name}</h5>
                <small className="-mt-1 text-sm">{offer?.location.title}</small>
              </div>
            </div>
            <p className="my-3 line-clamp-3">{offer?.company.description}</p>
            <Button
              style="DEFAULT"
              color="SECONDARY"
              hover="WHITE"
              width="w-full"
            >
              Ver más
            </Button>
          </div>
          <div className="mt-4 h-20 rounded-lg bg-slate-500 shadow-lg" />
        </div>
      </section>
    </>
  )
}
