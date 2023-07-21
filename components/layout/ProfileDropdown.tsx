
import AvatarIcon from '../AvatarIcon'
import ProfileDropdownMenu from './ProfileDropdownMenu'

export default async function ProfileDropdown() {
  const session = { user: { email: 'eflorez077@gmail.com', name: 'Esteban Florez' } }
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
