import { getServerSession } from 'next-auth'
import AvatarIcon from '../AvatarIcon'
import authOptions from '@/lib/auth-options'
import ProfileDropdownMenu from './ProfileDropdownMenu'

export default async function ProfileDropdown() {
  const session = await getServerSession(authOptions)
  const username = session?.user?.name ?? ''

  return (
    <div className="dropdown-end dropdown z-20">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <AvatarIcon username={username} />
      </label>
      <ProfileDropdownMenu username={username} />
    </div>
  )
}
