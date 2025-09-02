import { uri } from '@/lib/utils/url'

export default function NotFound() {
  return (
    <main className="device-height flex-center">
      <div className="flex-center flex-col gap-8 rounded-md border border-neutral-200 bg-base-200 p-10">
        <section className="px-4">
          <img src={uri('/404.webp')} alt="Imagen de página no encontrada." className="mx-auto my-10 w-80" />
        </section>
        <section className="px-4">
          <h2 className="text-balance text-2xl font-bold">Ups... Parece que hubo un error.</h2>
          <p className="font-semibold text-neutral-600">La página a la que está intentando acceder no existe.</p>
          <a className="btn-primary btn-block btn mx-auto mt-5" href="/home">
            Volver al inicio
          </a>
        </section>
      </div>
    </main>
  )
}
