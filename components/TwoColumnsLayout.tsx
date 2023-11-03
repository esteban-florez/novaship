export default function TwoColumnsLayout({ children }: React.PropsWithChildren) {
  return (
    <section className="flex flex-col lg:flex-row p-4 gap-2">
      {children}
    </section>
  )
}
