import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  title: string
  all?: boolean
  className?: string
}>

export default function FormLayout({
  children,
  title,
  all = false,
  className,
}: Props) {
  return (
    <section
      className={clsx({
        'mt-2 sm:mx-auto sm:mt-0 sm:px-20 sm:py-10': className == null,
        [className as string]: className != null,
      })}
    >
      <div className="card w-full bg-white border border-neutral-300 rounded-b-none rounded-t-lg px-6 py-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="font-semibold text-neutral-600 -mt-1.5">
          Todos los campos{' '}
          {!all && (
            <span>
              con <b className="text-error">*</b>{' '}
            </span>
          )}
          son obligatorios
        </p>
      </div>
      <div className="card w-full rounded-b-lg rounded-t-none border-y border-neutral-300 bg-base-100 p-6 pt-0 shadow-xl sm:border">
        {children}
      </div>
    </section>
  )
}
