import AvatarIcon from '@/components/AvatarIcon'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pasantías',
}

export default function IntenshipsPage() {
  const dummyArray = new Array(9).fill(null)

  return (
    <>
      <section className="flex items-center justify-between bg-primary p-4 text-white shadow">
        <div className="flex flex-col">
          <h1 className="font-title text-4xl font-bold tracking-tighter">Pasantes afiliados</h1>
          <p className="font-semibold">UPT La Victoria "Federico Brito Figueroa"</p>
        </div>
        <button className="btn-neutral btn">
          <PlusCircleIcon className="h-6 w-6 sm:h-5 sm:w-5" />
          <span className="hidden sm:inline">
            Afiliar
          </span>
        </button>
      </section>
      <section className="mx-4 mt-4 flex flex-col gap-4 sm:grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {dummyArray.map((_, i) => {
          return (
            <div key={i} className="card max-w-xs border-l-2 border-primary bg-white shadow sm:max-w-lg">
              <div className="card-body block">
                <div className="flex items-center gap-2">
                  <AvatarIcon username="Luis Fernandez" />
                  <h3 className="text-xl font-bold">Luis Fernández</h3>
                </div>
                <div className="mt-3">
                  <span className="badge badge-primary badge-outline me-2 py-1 font-semibold">
                    Programación
                  </span>
                  <span className="badge badge-primary badge-outline me-2 py-1 font-semibold">
                    JavaScript
                  </span>
                </div>
                <p className="mt-3 line-clamp-3">Estudiante de 4to Trayecto de Ingeniería Informática en la UPT Aragua, La Victoria.</p>
                <div className="card-actions mt-3">
                  <button className="btn-secondary btn">
                    Detalles
                  </button>
                  <button className="btn-error btn">
                    Retirar
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
