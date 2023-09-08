type Props = React.PropsWithChildren<{
  id: string
  icon: React.ReactElement
  title?: string
  className: string
  onClick?: () => void
}>

// TEMPORAL -> cambiar los modales por este nuevo
export default function Modal({ id, icon, title, className, children }: Props) {
  return (
    <>
      <label htmlFor={id} className={className}>
        <div className="flex items-center">
          {icon}
          <p className="ml-1 text-sm">{title}</p>
        </div>
      </label>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal p-0">
        <div className="modal-box p-0">
          <article className="mt-4 px-8 py-4 text-neutral-600">{children}</article>
        </div>
      </div>
    </>
  )
}
