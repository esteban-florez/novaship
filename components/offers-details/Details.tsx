'use-client'

import {
  ArrowLeftIcon,
  BanknotesIcon,
  ClockIcon,
  HomeModernIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
// import { type OffersWithRelationships } from '@/lib/types'
import { modes, targets } from '@/lib/translations'
import AvatarIcon from '../AvatarIcon'
import Button from '../Button'
import { type Company, type Field, type Offer, type Location, type Skill } from '@prisma/client'

interface Props {
  offer: Offer & {
    company: Company
    location: Location
    fields: Field[]
    skills: Skill[]
  }
}

export default function Details({ offer }: Props) {
  return (
    <>
      <div className="col-span-5">

        {/* hacer de esto un componente */}
        <div className="card bg-white p-4 shadow-xl">
          {/* Imagen */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h3 className="text-base font-bold sm:text-2xl">{offer.title}</h3>
              <p className="-mt-1 text-base text-primary">Arquitectura</p>
            </div>
            <div className="flex flex-col">
              <p className="text-base">Expira en: {offer.expiresAt?.getDate()} días</p>
              <p className="-mt-1 text-base">Límite: {offer.limit}</p>
            </div>
          </div>
          <p className="line-clamp-6 py-3">{offer.description}</p>
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

        {/* Hacer de esto otro componente */}
        <div className="mt-4 flex w-full columns-2 gap-3">
          <div className="card flex w-full flex-row items-center gap-3 bg-white p-4 shadow-lg">
            <HomeModernIcon className="h-12 w-12 text-primary" />
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">Modalidad</h3>
              <h4>{modes[offer.mode]}</h4>
            </div>
          </div>
          <div className="card flex w-full flex-row items-center gap-3 bg-white p-4 shadow-lg">
            <BanknotesIcon className="h-12 w-12 text-primary" />
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">Salario</h3>
              <h4>{offer.salary} $</h4>
            </div>
          </div>
        </div>
        <div className="mt-2 flex w-full columns-2 gap-3">
          <div className="card flex w-full flex-row items-center gap-3 bg-white p-4 shadow-lg">
            <UserIcon className="h-12 w-12 text-primary" />
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">Personal</h3>
              <h4>{targets[offer.target]}</h4>
            </div>
          </div>
          <div className="card flex w-full flex-row items-center gap-3 bg-white p-4 shadow-lg">
            <ClockIcon className="h-12 w-12 text-primary" />
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">Horas</h3>
              <h4>{offer.hours ?? 'No especificado'}</h4>
            </div>
          </div>
        </div>

        {/* Hacer otro componente */}
        <div className="card mt-4 bg-white p-4 shadow-lg">Habilidades</div>
      </div>

      <div className="col-span-2">
        {/* Hacer otro componente */}
        <div className="card bg-white p-4 shadow-md lg:self-start">
          <div className="flex items-center gap-2">
            <AvatarIcon username="Pedro Lopez" className="bg-black text-white" />
            <div className="flex flex-col">
              <h5 className="text-base font-bold">{offer.company.name}</h5>
              <small className="-mt-1 text-sm">{offer.location.title}</small>
            </div>
          </div>
          <p className="my-3 line-clamp-3">{offer.company.description}</p>
          <Button
            style="DEFAULT"
            color="SECONDARY"
            hover="WHITE"
            width="w-full"
          >
            Ver más
          </Button>
        </div>

        {/* Esto es un calendario, otro componente, si es que lo llego a poner aqui */}
        <div className="mt-4 h-20 rounded-lg bg-slate-500 shadow-lg" />
      </div>
    </>
  )
}
