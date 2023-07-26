import { auth } from '@/lib/auth'
import AvatarIcon from '../AvatarIcon'
import ProfileDropdownMenu from './ProfileDropdownMenu'

export default async function ProfileDropdown() {
  const { user: { name, surname } } = await auth()
  const username = `${name} ${surname}`

  return (
    <div className="dropdown-end dropdown z-20">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <AvatarIcon username={username} />
      </label>
      <ProfileDropdownMenu username={username} />
    </div>
  )
}
