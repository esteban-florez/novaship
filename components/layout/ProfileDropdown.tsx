import AvatarIcon from '../AvatarIcon'
import ProfileDropdownMenu from './ProfileDropdownMenu'
import { auth } from '@/lib/auth/pages'

export default async function ProfileDropdown() {
  const { name, email, image } = await auth.user()

  return (
    <div className="dropdown-end dropdown z-20">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <AvatarIcon image={image} />
      </label>
      <ProfileDropdownMenu username={name} email={email} />
    </div>
  )
}
