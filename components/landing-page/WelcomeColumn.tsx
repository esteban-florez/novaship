import Link from 'next/link'

export default function WelcomeColumn() {
  return (
    <div className="order-2 flex h-auto flex-1 flex-col items-center justify-center md:order-1">
      <div className="rounded-sm border border-neutral-300 bg-gray-100 p-4 shadow-xl md:mx-24 md:py-6">
        <p className="text-center text-xl">
          Lleva tu <span className="indent-4 font-semibold text-secondary">carrera profesional</span> al  <span className="indent-8 font-semibold text-primary">siguiente nivel</span>
        </p>
        <h2 className="my-8 text-center text-2xl font-bold">¡Ingresa ya!</h2>
        <div className="flex justify-between gap-x-4">
          <Link href="/auth/login" className="flex-1 rounded-md bg-primary py-2 text-center text-lg font-semibold text-primary-content">Iniciar sesión</Link>
          <Link href="/auth/signup" className="flex-1 rounded-md bg-primary py-2 text-center text-lg font-semibold text-primary-content">Registrarme</Link>
        </div>
      </div>
    </div>
  )
}
