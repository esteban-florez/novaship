type Props = React.PropsWithChildren<{
  className: string
  onClick?: () => void
}>

// TEMPORAL -> cambiar los botones por este nuevo
export default function Button({ className, onClick, children }: Props) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
