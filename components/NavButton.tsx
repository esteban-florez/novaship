import Button from './Button'

type Props = React.PropsWithChildren<{
  icon: React.ReactElement
  isActive?: boolean
  onClick?: () => void
}>

export default function NavButton({ isActive = false, icon, onClick, children }: Props) {
  return (
    <Button
      icon={icon}
      style="TAB"
      color={isActive ? 'PRIMARY' : 'WHITE'}
      hover={isActive ? 'EMPTY' : 'PRIMARY'}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
