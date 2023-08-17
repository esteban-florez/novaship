import Button from './Button'

type Props = React.PropsWithChildren<{
  icon?: React.ReactElement
  isActive?: boolean
  onClick?: () => void
}>

// Tip -> Es un componente innecesario, usalo como en el componente de /projects/filter
export default function NavButton({ icon, isActive = false, onClick, children }: Props) {
  return (
    <Button
      style="TAB"
      color={isActive ? 'PRIMARY' : 'WHITE'}
      hover={isActive ? 'WHITE' : 'PRIMARY'}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
