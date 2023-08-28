type Props = React.PropsWithChildren

export default function FormLayout({ children }: Props) {
  return (
    <section className="mt-2 sm:mx-auto sm:mt-0 sm:px-20 sm:py-10">
      <div className="card w-full rounded-none border-y border-neutral-300 bg-base-100 p-4 shadow-xl sm:rounded-lg sm:border">
        {children}
      </div>
    </section>
  )
}
