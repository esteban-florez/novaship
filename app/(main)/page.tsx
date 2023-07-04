import { HeartIcon, EyeIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="flex-center flex-col p-8">
      <div className="stats stats-vertical mb-8 w-full shadow sm:stats-horizontal">
        <div className="stat">
          <div className="stat-figure">
            <HeartIcon className="h-8 w-8 stroke-primary stroke-2" />
          </div>
          <div className="stat-title font-title">Me gustas totales</div>
          <div className="stat-value">25.6K</div>
          <div className="stat-desc">21% mayor al mes pasado</div>
        </div>
        <div className="stat">
          <div className="stat-figure">
            <EyeIcon className="h-8 w-8 stroke-primary stroke-2" />
          </div>
          <div className="stat-title font-title">Páginas vistas</div>
          <div className="stat-value">2.6M</div>
          <div className="stat-desc">21% mayor al mes pasado</div>
        </div>
        <div className="stat">
          <div className="stat-figure">
            <ClipboardDocumentListIcon className="h-8 w-8 stroke-primary stroke-2" />
          </div>
          <div className="stat-title font-title">Tareas completadas</div>
          <div className="stat-value">86%</div>
          <div className="stat-desc">31 restantes</div>
        </div>
      </div>

      <div className="flex-center flex w-full flex-col text-center sm:flex-row">
        <div className="card rounded-box grid w-full grow place-items-center border-x-4 border-primary bg-white p-8 shadow-md sm:w-3/6">
          <h5 className="font-bold">¿Tiene una empresa y desea registrarla?</h5>
          <Link className="btn-primary btn mt-4" href="/profile">Registrar empresa</Link>
        </div>
        <div className="divider divider-horizontal mx-auto font-bold sm:px-4">O</div>
        <div className="card rounded-box grid w-full grow place-items-center border-x-4 border-primary bg-white p-8 shadow-md sm:w-3/6">
          <h5 className="font-bold">¿Es director de una institución?</h5>
          <Link className="btn-primary btn mt-4" href="/profile">Registrar institución</Link>
        </div>
      </div>
    </section>
  )
}
