'use client'

import { usePathname } from 'next/navigation'
import ProfileTabLink from './ProfileTabLink'

export default function ProfileTabs() {
  const currentPath = usePathname()

  return (
    <>
      <div className="tabs tabs-boxed mb-6 items-center justify-between bg-base-100">
        <ProfileTabLink href="/home/profile/user" currentPath={currentPath}>
          Perfil personal
        </ProfileTabLink>
        <ProfileTabLink href="/home/profile/professional" currentPath={currentPath}>
          Perfil profesional
        </ProfileTabLink>
        <ProfileTabLink href="/home/profile/institute" currentPath={currentPath}>
          Perfil institucional
        </ProfileTabLink>
        <ProfileTabLink href="/home/profile/company" currentPath={currentPath}>
          Perfil empresarial
        </ProfileTabLink>
      </div>
    </>
  )
}
