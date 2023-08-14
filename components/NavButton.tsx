import Button from './Button'

type Props = React.PropsWithChildren<{
  isActive?: boolean
  onClick?: () => void
}>

export default function NavButton({ isActive = false, onClick, children }: Props) {
  return (
    <Button
      style="TAB"
      color={isActive ? 'WHITE' : 'GHOST'}
      hover={isActive ? 'SECONDARY' : 'WHITE'}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
