import { ShieldCheckIcon, StarIcon, ArrowTrendingUpIcon, RectangleGroupIcon, ShareIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import MiniCard from './MiniCard'
import Title from './Title'

export default function WhatWeOfferSection() {
  return (
    <section className="mb-4 bg-white px-4 pb-16 pt-8 text-base md:px-20 md:text-lg">
      <Title>Tu estadía importa, por eso te brindamos</Title>
      <div className="flex flex-col gap-4 md:flex-row">
        <MiniCard title="Seguridad" icon={<ShieldCheckIcon className="h-9 w-9 fill-primary" />}>
          <p>No compartiremos lo que no se debe compartir.</p>
          <p className="font-semibold">¡Mantenemos tus datos protegidos!</p>
        </MiniCard>
        <MiniCard title="Confianza" icon={<StarIcon className="h-9 w-9 fill-primary" />}>
          <p>Recibe el apoyo que necesites.</p>
          <p className="font-semibold">¡Hecha de universitarios para universitarios!</p>
        </MiniCard>
        <MiniCard title="Oportunidades" icon={<ArrowTrendingUpIcon className="h-9 w-9 fill-primary" />}>
          <p>No salgas sin experiencia.</p>
          <p className="font-semibold">¡Aprovecha la oportunidad!</p>
        </MiniCard>
      </div>
      <div className="mt-4 flex flex-col gap-4 md:flex-row">
        <MiniCard title="Fácil de usar" icon={<RectangleGroupIcon className="h-9 w-9 fill-primary" />}>
          <p>Configura lo necesario para el máximo provecho</p>
          <p className="font-semibold">¡Unos cuantos clics y listo!</p>
        </MiniCard>
        <MiniCard title="Comunicación" icon={<ShareIcon className="h-9 w-9 fill-primary" />}>
          <p>Nosotros te haremos llegar a todas las empresas registradas al completar tu perfil.</p>
          <p className="font-semibold">¡Si no te ven no saben de ti!</p>
        </MiniCard>
        <MiniCard title="Trabajo en equipo" icon={<UserGroupIcon className="h-9 w-9 fill-primary" />}>
          <p>Lleva tu proyecto a nuevos espacios y alguien te ayudará.</p>
          <p className="font-semibold">¡Trabajar en equipo nunca ha sido tan fácil!</p>
        </MiniCard>
      </div>
    </section>
  )
}
