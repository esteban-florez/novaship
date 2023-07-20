type Props = React.PropsWithChildren<{
  color: string
}>

export default function ActionButton({ children, color }: Props) {
  return (
    <button className={`${color} btn-sm btn border-none px-6`}>
      {children}
    </button>
  )
}
