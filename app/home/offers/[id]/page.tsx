import AvatarIcon from '@/components/AvatarIcon'
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desarrollador Web Front-End',
}

export default function OfferPage() {
  return (
    <section className="flex flex-col gap-4 px-2 pt-2 lg:flex-row lg:px-4 lg:pt-4">
      <div className="card border-t-4 border-primary bg-white shadow-md lg:w-3/4">
        <div className="p-6 lg:card-body lg:flex lg:flex-row">
          <div className="lg:w-4/5">
            <h1 className="text-4xl font-bold tracking-tighter text-primary">
              Desarrollador Web Front-End
            </h1>
            <p className="-mt-2 text-lg font-semibold uppercase text-neutral-400">
              Desarrollo Informático
            </p>
            <div className="mt-3 lg:hidden">
              <p className="flex gap-1">
                <ClockIcon className="h-5 w-5" />
                Full-Time
              </p>
              <p className="flex gap-1">
                <MapPinIcon className="h-5 w-5" />
                Remoto
              </p>
            </div>
            <p className="mt-4">
              Se busca Desarrollador Web Front-End con años de experiencia, para trabajar en proyectos web de diferentes categorías, teniendo en cuenta todas las características del desarrollo moderno.
            </p>
            <p className="mt-2 text-3xl">
              <span className="font-bold text-green-600">25 $/hr</span>
            </p>
            <div className="mt-4 w-full lg:w-auto">
              <button className="btn-primary btn w-full lg:w-auto">
                <span className="uppercase">
                  ¡Quiero aplicar!
                </span>
              </button>
              <button className="btn-ghost btn w-full lg:w-auto">
                <span className="uppercase">
                  Volver al listado
                </span>
              </button>
            </div>
          </div>
          <div className="-my-1 hidden flex-col items-center justify-between lg:flex lg:w-1/5">
            <span className="flex w-full flex-col items-center py-4 font-semibold text-primary">
              <ClockIcon className="h-8 w-8" />
              Full-Time
            </span>
            <div className="divider divider-vertical px-4" />
            <span className="flex w-full flex-col items-center py-4 font-semibold text-primary">
              <MapPinIcon className="h-8 w-8" />
              Remoto
            </span>
          </div>
        </div>
      </div>
      <div className="card bg-white p-8 shadow-md lg:w-1/4 lg:self-start">
        <p className="-mx-4 -mt-4 rounded-xl bg-neutral-200 py-2 text-center font-bold uppercase">Ofrecido por</p>
        <div className="mt-4 flex items-center gap-2">
          <AvatarIcon username="Empresa Net" />
          <h3 className="card-title text-xl font-semibold">EmpresaNet</h3>
        </div>
        <p className="mt-2 line-clamp-3">Empresa líder en soluciones informáticas con sede en Venezuela desde el 2008.</p>
        <button className="btn-primary btn-block btn mt-2">
          Ver más
        </button>
      </div>
    </section>
  )
}
