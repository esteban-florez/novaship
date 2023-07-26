import { RocketLaunchIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <section className="flex-center h-72 w-full flex-col bg-neutral text-center font-title text-2xl text-white shadow">
        <p className="mt-3">
          Mejora tus oportunidades de <span className="badge badge-secondary badge-lg font-semibold">ofertas laborales</span> o <span className="badge badge-accent badge-lg font-semibold">pasantías</span>
        </p>
        <p><span className="font-bold">Novaship </span> te espera</p>
        <div className="my-4 flex flex-col items-center gap-4">
          <p className="text-center">
            ¿Qué esperas?
          </p>
          <RocketLaunchIcon className="h-8 w-8" />
        </div>
        <p className="badge badge-primary badge-lg">¡Es tiempo de que despegues!</p>
      </section>
      <section className="flex-center flex-col p-4">
        <div className="flex-center flex w-full flex-col text-center sm:flex-row">
          <div className="card grid w-full grow place-items-center bg-white p-8 shadow-md sm:w-3/6">
            <h5 className="border-b pb-2 font-title font-bold">¿Es gerente de una empresa?</h5>
            <p className="mt-3 text-sm">Busque aspirantes o publique ofertas laborales para hacer crecer su empresa y darle oportunidad a estudiantes egresados</p>
            <Link className="btn-primary btn mt-4 px-6" href="/home/profile/company">Registrar empresa</Link>
          </div>
          <div className="divider divider-horizontal mx-auto font-bold sm:px-4">O</div>
          <div className="card grid w-full grow place-items-center bg-white p-8 shadow-md sm:w-3/6">
            <h5 className="border-b pb-2 font-title font-bold">¿Es director de una institución?</h5>
            <p className="mt-3 text-sm">Afíliese con distintas empresas para garantizarle pasantías a sus estudiantes o una oferta laboral</p>
            <Link className="btn-primary btn mt-4 px-6" href="/home/profile/institute">Registrar institución</Link>
          </div>
        </div>
      </section>
      <section className="rounded-lg p-4">
        <div className="bg-white p-4">
          <h4 className="mb-4 text-2xl font-semibold">Mis proyectos</h4>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex w-full flex-col rounded-md border md:w-2/4">
              <h6 className="border-b bg-gray-100 p-4 text-lg font-semibold">Aplicación administrativa UTV</h6>
              <div className="flex-col py-2">
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Tareas pendientes:</h6>
                  <span className="text-xs md:text-base">6</span>
                </div>
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Tareas completadas:</h6>
                  <span className="text-xs md:text-base">29</span>
                </div>
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Miembros:</h6>
                  <span className="text-xs md:text-base">6</span>
                </div>
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Estado:</h6>
                  <span className="text-xs md:text-base">Público</span>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col rounded-md border md:w-2/4">
              <h6 className="border-b bg-gray-100 p-4 text-lg font-semibold">Estructura de servidor</h6>
              <div className="flex-col py-2">
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Tareas pendientes:</h6>
                  <span className="text-xs md:text-base">14</span>
                </div>
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Tareas completadas:</h6>
                  <span className="text-xs md:text-base">59</span>
                </div>
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Miembros:</h6>
                  <span className="text-xs md:text-base">23</span>
                </div>
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Estado:</h6>
                  <span className="text-xs md:text-base">Privado</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-8 md:flex-row">
            <div className="flex w-full flex-col rounded-md border md:w-2/4">
              <h6 className="border-b bg-gray-100 p-4 text-lg font-semibold">Cableado eléctrico</h6>
              <div className="flex-col py-2">
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Tareas pendientes:</h6>
                  <span className="text-xs md:text-base">10</span>
                </div>
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Tareas completadas:</h6>
                  <span className="text-xs md:text-base">18</span>
                </div>
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Miembros:</h6>
                  <span className="text-xs md:text-base">8</span>
                </div>
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Estado:</h6>
                  <span className="text-xs md:text-base">Privado</span>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col rounded-md border md:w-2/4">
              <h6 className="w-full border-b bg-gray-100 p-4 text-lg font-semibold md:w-2/4">Análisis de mercado</h6>
              <div className="flex-col py-2">
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Tareas pendientes:</h6>
                  <span className="text-xs md:text-base">3</span>
                </div>
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Tareas completadas:</h6>
                  <span className="text-xs md:text-base">25</span>
                </div>
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Miembros:</h6>
                  <span className="text-xs md:text-base">7</span>
                </div>
                <div className="ms-6 flex gap-x-4">
                  <h6 className="text-sm font-semibold md:text-base">Estado:</h6>
                  <span className="text-xs md:text-base">Privado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
