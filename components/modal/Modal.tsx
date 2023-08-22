import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  id: string
  icon: React.ReactElement
  button: string
  onClick?: () => void
}>

// TEMPORAL -> cambiar los modales por este nuevo
export default function Modal({ id, icon, button, children }: Props) {
  return (
    <>
      <label htmlFor={id} className={clsx(button)}>
        {icon}
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
