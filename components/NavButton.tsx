import clsx from 'clsx'
import Button from './Button'

type Props = React.PropsWithChildren<{
  icon: React.ReactElement
  isActive?: boolean
}>

export default function NavButton({ isActive = false, icon, children }: Props) {
  const className = clsx({
    'btn-md btn rounded-b-none font-semibold normal-case sm:text-lg': true,
    'btn-active border-none bg-white hover:bg-zinc-400': isActive,
    'btn-ghost hover:btn-active': !isActive,
  })

  return (
    <Button icon={icon} className={className}>
      {children}
    </Button>
  )
}
