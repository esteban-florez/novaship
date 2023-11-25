type Props = React.PropsWithChildren<{
  id?: string
  icon?: React.ReactElement
  title?: string
  className?: string
  forceOpen?: boolean
  labelRef?: React.MutableRefObject<HTMLInputElement | null>
}>

// TEMPORAL -> cambiar los modales por este nuevo
export default function Modal({
  id,
  icon,
  title,
  className,
  children,
  labelRef,
  forceOpen = false,
}: Props) {
  return (
    <>
      {!forceOpen && (
        <label
          htmlFor={id}
          className={className}
        >
          {icon}
          {title}
        </label>
      )}
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
            ref={labelRef}
          />
          )}
      <div className="modal p-0">
        <div className="rounded-md modal-box p-0 scrollbar">
          <article className="p-4">{children}</article>
        </div>
      </div>
    </>
  )
}
