import { getServerSession } from 'next-auth'
import AvatarIcon from '../AvatarIcon'
import authOptions from '@/utils/authOptions'
import ProfileDropdownMenu from './ProfileDropdownMenu'

export default async function ProfileDropdown() {
  const session = await getServerSession(authOptions)
  console.log(session)
  const username = session?.user?.name ?? ''

  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <AvatarIcon username={username} usernameLength={2} />
      </label>
      <ProfileDropdownMenu username={username} />
    </div>
  )
}
