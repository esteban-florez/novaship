import Button from './Button'

type Props = React.PropsWithChildren<{
  icon: React.ReactElement
  isActive?: boolean
}>

export default function NavButton({ isActive = false, icon, children }: Props) {
  return (
    <Button icon={icon} style="TAB" color={isActive ? 'PRIMARY' : 'WHITE'} hover={isActive ? 'EMPTY' : 'PRIMARY'}>
      {children}
    </Button>
  )
}
