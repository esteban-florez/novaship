import { ArrowLeftOnRectangleIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Navbar() {
  return (
    <section className="navbar fixed z-[9999] w-full flex-col border-b border-neutral-300 bg-white backdrop-blur-sm sm:flex-row">
      <div className="w-full flex-col items-center justify-center sm:w-2/4">
        <h1 className="my-2 bg-gradient-to-r from-primary from-50% to-secondary bg-clip-text text-center text-4xl font-bold text-transparent sm:my-0 sm:text-6xl">Novaship</h1>
      </div>
      <div className="flex w-full items-center justify-center gap-2 sm:w-2/4 sm:flex-row sm:justify-end">
        <Link href="/auth/login" className="btn-primary btn-sm btn sm:btn-wide sm:btn-md">
          <ArrowLeftOnRectangleIcon className="h-5 w-5" />
          Iniciar sesión
        </Link>
        <Link href="/auth/signup" className="btn-secondary btn-outline btn-md btn sm:btn-wide">
          <UserPlusIcon className="h-5 w-5" />
          Registrarme
        </Link>
      </div>
    </section>
  )
}
