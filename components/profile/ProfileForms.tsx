'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ProfileForms() {
  const currentPath = usePathname()
  const activeClasses = 'tab-lg tab-active btn normal-case font-bold'
  const inactiveClasses = 'tab-lg tab hover:tab-active'

  return (
    <>
      <div className="tabs tabs-boxed mb-6 items-center justify-between bg-base-100">
        <Link href="/profile/user" className={`${currentPath === '/profile/user' ? activeClasses : inactiveClasses}`}>
          Perfil personal
        </Link>
        <Link href="/profile/professional" className={`${currentPath === '/profile/professional' ? activeClasses : inactiveClasses}`}>
          Perfil profesional
        </Link>
        <Link href="/profile/institute" className={`${currentPath === '/profile/institute' ? activeClasses : inactiveClasses}`}>
          Perfil institucional
        </Link>
        <Link href="/profile/company" className={`${currentPath === '/profile/company' ? activeClasses : inactiveClasses}`}>
          Perfil empresarial
        </Link>
      </div>
    </>
  )
}
