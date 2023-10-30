import Link from 'next/link'

export default function NotificationDropdownMenu({ children }: React.PropsWithChildren) {
  return (
    <div className="dropdown-content z-10 rounded-lg border border-base-200 bg-white shadow-md">
      <div className="mb-2 rounded-t-lg bg-primary p-4 text-white shadow">
        <h3 className="text-center font-semibold uppercase">Notificaciones</h3>
      </div>
      {children}
      <Link href="/home/notifications">
        <button className="w-full rounded-b-lg border-t border-base-300 py-4 text-center hover:bg-base-300">
          <span className="font-bold text-primary">Todas las notificaciones</span>
        </button>
      </Link>
    </div>
  )
}
