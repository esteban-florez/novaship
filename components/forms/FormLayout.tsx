type Props = React.PropsWithChildren<{
  title: string
  require: boolean
}>

export default function FormLayout({ children, title, require }: Props) {
  return (
    <section className="mt-2 sm:mx-auto sm:mt-0 sm:px-20 sm:py-10">
      <div className="relative">
        <div className="absolute z-20 inset-4">
          <h1 className="text-3xl text-white font-bold">{title}</h1>
          {require && <h1 className="text-sm text-white/80 font-semibold -mt-1.5">Todos los campos son obligatorios</h1>}
        </div>
        <img src="/coso3.webp" alt="Onda-horizontal" className="absolute rounded-t-lg z-10 -bottom-28 h-28 w-full" />
      </div>
      <div className="card w-full rounded-none border-y border-neutral-300 bg-base-100 p-4 pt-24 shadow-xl sm:rounded-lg sm:border">
        {children}
      </div>
    </section>
  )
}
