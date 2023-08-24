import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  title: string
  size?: string
}>

export default function EmptyContent({ title, children, size }: Props) {
  return (
    <div className={clsx('mx-auto mt-4 flex flex-col gap-y-4 pb-0 text-center sm:mt-0 sm:p-4', size)}>
      <h2 className="text-xl font-bold text-gray-600 sm:text-2xl">{title}</h2>
      <p className="font-semibold text-gray-500 sm:text-lg">{children}</p>
      <img src="/empty.webp" alt="Imagen representando contenido vacío." className="mt-5 h-40 w-full" />
    </div>
  )
}
