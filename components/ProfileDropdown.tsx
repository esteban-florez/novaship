import Link from 'next/link'

// UNUSED
function Modal1() {
  return (
    <div className="absolute right-0 top-14 flex flex-col whitespace-nowrap rounded-lg bg-white px-6 py-4 shadow-xl">
      <span className="text-start text-xs text-neutral-content">
        Nombre y apellido
      </span>
      <h5 className="mb-3 mt-2 text-center text-black">Username</h5>
      <Link
        href="/profile"
        className="border-y py-2 text-sm hover:text-light_purple"
      >
        Ver perfil
      </Link>
      <Link
        href="/login"
        className="mt-6 rounded-sm bg-gray-200 py-2 normal-case shadow-sm transition-colors hover:bg-gray-500 hover:text-white"
      >
        Cerrar sesión
      </Link>
    </div>
  )
}

export default function ProfileDropdown() {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
      }}
      className="absolute right-0 top-14 flex flex-col whitespace-nowrap rounded-lg bg-white px-6 py-4 shadow-xl"
    >
      {/* Username */}
      <span className="text-start text-xs text-neutral-content">
        Nombre y apellido
      </span>
      <h5 className="mb-3 mt-2 text-center text-black">Username</h5>

      <span className="pt-2 text-start text-xs text-neutral-content">
        Opciones
      </span>
      <Link
        href="/profile"
        className="border-l py-2 text-start indent-2 text-xs normal-case hover:border-l-2 hover:border-light_purple hover:bg-light_purple/25"
      >
        Ver perfil
      </Link>
      <Link
        href="/profile"
        className="border-l py-2 text-start indent-2 text-xs normal-case hover:border-l-2 hover:border-light_purple hover:bg-light_purple/25"
      >
        Relleno x1
      </Link>
      <Link
        href="/profile"
        className="border-l py-2 text-start indent-2 text-xs normal-case hover:border-l-2 hover:border-light_purple hover:bg-light_purple/25"
      >
        Relleno x2
      </Link>
      <Link
        href="/profile"
        className="border-l py-2 text-start indent-2 text-xs normal-case hover:border-l-2 hover:border-light_purple hover:bg-light_purple/25"
      >
        Relleno x3
      </Link>

      {/* Logout */}
      <Link
        href="/login"
        className="mt-6 rounded-sm bg-gray-200 py-2 normal-case shadow-sm transition-colors hover:bg-gray-500 hover:text-white"
      >
        Cerrar sesión
      </Link>
    </div>
  )
}
