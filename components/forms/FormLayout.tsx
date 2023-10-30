type Props = React.PropsWithChildren<{
  title: string
  require: boolean
}>

export default function FormLayout({ children, title, require }: Props) {
  return (
    <section className="mt-2 sm:mx-auto sm:mt-0 sm:px-20 sm:py-10">
      <div className="card w-full bg-white border border-neutral-300 rounded-b-none rounded-t-lg px-6 py-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        {require &&
          <h1 className="text-base text-black/80 font-semibold -mt-1.5">
            Todos los campos con * son obligatorios
          </h1>}
      </div>
      <div className="card w-full rounded-b-lg rounded-t-none border-y border-neutral-300 bg-base-100 p-6 pt-0 shadow-xl sm:border">
        {children}
      </div>
    </section>
  )
}
