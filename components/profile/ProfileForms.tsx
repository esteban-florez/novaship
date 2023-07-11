'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ProfileForms() {
  // TODO -> ejemplo de nombres que no describen lo que son las cosas xd
  const currentPath = usePathname()
  const activeClasses = 'tab-active btn normal-case font-bold'
  const inactiveClasses = 'hover:tab-active'

  return (
    <>
      <div className="tabs tabs-boxed mb-6 items-center justify-between bg-base-100">
        <Link href="/profile/user" className={`tab tab-lg border-none transition-all ${currentPath === '/profile/user' ? activeClasses : inactiveClasses}`}>
          Perfil personal
        </Link>
        <Link href="/profile/professional" className={`tab tab-lg border-none transition-all ${currentPath === '/profile/professional' ? activeClasses : inactiveClasses}`}>
          Perfil profesional
        </Link>
        <Link href="/profile/institute" className={`tab tab-lg border-none transition-all ${currentPath === '/profile/institute' ? activeClasses : inactiveClasses}`}>
          Perfil institucional
        </Link>
        <Link href="/profile/company" className={`tab tab-lg border-none transition-all ${currentPath === '/profile/company' ? activeClasses : inactiveClasses}`}>
          Perfil empresarial
        </Link>
      </div>
    </>
  )
}
