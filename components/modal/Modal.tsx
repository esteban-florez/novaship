import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  id?: string
  icon?: React.ReactElement
  title?: string
  className?: string
  forceOpen?: boolean
  labelRef?: React.MutableRefObject<HTMLInputElement | null>
  modalClasses?: string
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
  modalClasses,
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
        <div
          className={clsx('rounded-md modal-box p-0 scrollbar', modalClasses)}
        >
          <article className="p-4">{children}</article>
        </div>
      </div>
    </>
  )
}
