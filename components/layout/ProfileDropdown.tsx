import { validateUser } from '@/lib/auth'
import AvatarIcon from '../AvatarIcon'
import ProfileDropdownMenu from './ProfileDropdownMenu'
import { redirect } from 'next/navigation'

export default async function ProfileDropdown() {
  const { user } = await validateUser()

  if (user === null) {
    return redirect('/auth/login')
  }

  const username = `${user.name} ${user.surname}`

  return (
    <div className="dropdown-end dropdown z-20">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <AvatarIcon username={username} />
      </label>
      <ProfileDropdownMenu username={username} />
    </div>
  )
}
