type Props = React.PropsWithChildren<{
  id: string
  icon?: React.ReactElement
  title?: string
  className?: string
  onClick?: () => void
  forceOpen?: boolean
}>

// TEMPORAL -> cambiar los modales por este nuevo
export default function Modal({
  id,
  icon,
  title,
  className,
  children,
  forceOpen = false,
}: Props) {
  return (
    <>
      <label
        htmlFor={id}
        className={className}
      >
        {icon}
        {title}
      </label>
      {forceOpen
        ? (
          <input
            type="checkbox"
            id={id}
            className="modal-toggle"
            key="forced"
            checked
            readOnly
          />
          )
        : (
          <input
            type="checkbox"
            id={id}
            className="modal-toggle"
            key="normal"
          />
          )}
      <div className="modal p-0">
        <div className="modal-box p-0">
          <article className="p-4">{children}</article>
        </div>
      </div>
    </>
  )
}
