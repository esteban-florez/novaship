'use client'

import { usePathname } from 'next/navigation'
import ProfileTabLink from './ProfileTabLink'

export default function ProfileTabs() {
  const currentPath = usePathname()

  return (
    <>
      <div className="tabs tabs-boxed mb-6 items-center justify-between bg-base-100">
        <ProfileTabLink href="/profile/user" currentPath={currentPath}>
          Perfil personal
        </ProfileTabLink>
        <ProfileTabLink href="/profile/professional" currentPath={currentPath}>
          Perfil profesional
        </ProfileTabLink>
        <ProfileTabLink href="/profile/institute" currentPath={currentPath}>
          Perfil institucional
        </ProfileTabLink>
        <ProfileTabLink href="/profile/company" currentPath={currentPath}>
          Perfil empresarial
        </ProfileTabLink>
      </div>
    </>
  )
}
