// DEV
// import { auth } from '@/lib/auth'
import AvatarIcon from '../AvatarIcon'
import ProfileDropdownMenu from './ProfileDropdownMenu'

export default async function ProfileDropdown() {
  // const { name } = await auth.person()

  return (
    <div className="dropdown-end dropdown z-20">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        {/* <AvatarIcon username={name} /> */}
        <AvatarIcon username="" />
      </label>
      {/* <ProfileDropdownMenu username={name} /> */}
      <ProfileDropdownMenu username="" />
    </div>
  )
}
