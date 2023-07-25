export default function WhoWeAreColumn() {
  return (
    <div className="order-1 flex flex-1 flex-col items-center justify-center md:order-2">
      <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:rounded-md before:bg-primary">
        <h2 className="relative px-2 text-2xl font-bold text-primary-content">Novaship</h2>
      </span>
      <div className="my-6 flex flex-col gap-x-2 px-4 md:px-20">
        <div className="flex items-center">
          <span className="h-14 text-9xl text-primary">“</span>
        </div>
        <p className="rounded-md border bg-gray-100 p-4">Únete a nuestra plataforma web y <span className="font-semibold text-secondary">descubre</span> una amplia variedad de <span className="font-semibold text-primary">oportunidades</span> de pasantías, ofertas laborales y proyectos. Con herramientas de gestión intuitivas y eficaces, te ayudamos a encontrar la oportunidad perfecta <span className="font-semibold text-primary">para ti</span>.</p>
        <div className="flex items-center justify-end">
          <span className="h-14 text-9xl text-primary">”</span>
        </div>
      </div>
    </div>
  )
}
