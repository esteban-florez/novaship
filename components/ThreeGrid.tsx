type Props = React.PropsWithChildren

export default function ThreeGrid({ children }: Props) {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {children}
    </section>
  )
}
