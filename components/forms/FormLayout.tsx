type Props = React.PropsWithChildren

export default function FormLayout({ children }: Props) {
  return (
    <section className="mx-auto px-20 py-10">
      <div className="card w-full rounded-lg border border-neutral-300 bg-base-100 p-4 shadow-xl">
        {children}
      </div>
    </section>
  )
}
