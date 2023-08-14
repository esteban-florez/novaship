type Props = React.PropsWithChildren<{
  title: string
}>

export default function EmptyContent({ title, children }: Props) {
  return (
    <div className="mx-auto mt-5 flex h-full w-full flex-col gap-y-4 pb-0 text-center sm:w-2/4 sm:p-4">
      <h2 className="text-xl font-bold text-gray-600 sm:text-2xl">{title}</h2>
      <p className="font-semibold text-gray-500 sm:text-lg">{children}</p>
      <img src="/empty.webp" alt="Imagen representando contenido vacío." className="mt-5 h-80 w-full" />
    </div>
  )
}
