import { auth } from '@/lib/auth/pages'
import AvatarIcon from '../AvatarIcon'
import ProfileDropdownMenu from './ProfileDropdownMenu'

export default async function ProfileDropdown() {
  // TODO -> debe funcionar para todos los tipos de usuario
  const { name } = await auth.person()

  return (
    <div className="dropdown-end dropdown z-20">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <AvatarIcon username={name} />
      </label>
      <ProfileDropdownMenu username={name} />
    </div>
  )
}
