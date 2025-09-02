import { ShieldCheckIcon, StarIcon, ArrowTrendingUpIcon, RectangleGroupIcon, ShareIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import MiniCard from './MiniCard'
import Title from './Title'

export default function FooterSection() {
  return (
    <section className="mb-4 bg-neutral-200 px-4 pb-16 pt-8 text-base md:px-20 md:text-lg">
      <Title>Tu estadía importa, por eso te brindamos</Title>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <MiniCard title="Seguridad" icon={<ShieldCheckIcon className="h-9 w-9" />}>
          <p>No compartiremos lo que no se debe compartir.</p>
          <p className="font-semibold">¡Mantenemos tus datos protegidos!</p>
        </MiniCard>
        <MiniCard title="Confianza" icon={<StarIcon className="h-9 w-9" />}>
          <p>Recibe el apoyo que necesites.</p>
          <p className="font-semibold">¡Hecha de universitarios para universitarios!</p>
        </MiniCard>
        <MiniCard title="Oportunidades" icon={<ArrowTrendingUpIcon className="h-9 w-9" />}>
          <p>No salgas sin experiencia.</p>
          <p className="font-semibold">¡Aprovecha la oportunidad!</p>
        </MiniCard>
        <MiniCard title="Fácil de usar" icon={<RectangleGroupIcon className="h-9 w-9" />}>
          <p>Configura lo necesario para el máximo provecho</p>
          <p className="font-semibold">¡Unos cuantos clics y listo!</p>
        </MiniCard>
        <MiniCard title="Comunicación" icon={<ShareIcon className="h-9 w-9" />}>
          <p>Nosotros te haremos llegar a todas las empresas registradas al completar tu perfil.</p>
          <p className="font-semibold">¡Si no te ven no saben de ti!</p>
        </MiniCard>
        <MiniCard title="Trabajo en equipo" icon={<UserGroupIcon className="h-9 w-9" />}>
          <p>Lleva tu proyecto a nuevos espacios y alguien te ayudará.</p>
          <p className="font-semibold">¡Trabajar en equipo nunca ha sido tan fácil!</p>
        </MiniCard>
      </div>
    </section>
  )
}
