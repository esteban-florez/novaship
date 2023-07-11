import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="flex-center flex-col p-8">
      <div className="flex-center flex w-full flex-col text-center sm:flex-row">
        <div className="card rounded-box grid w-full grow place-items-center border-x-4 border-primary bg-white p-8 shadow-md sm:w-3/6">
          <h5 className="font-bold">¿Tiene una empresa y desea registrarla?</h5>
          <Link className="btn-primary btn mt-4" href="/profile/company">Registrar empresa</Link>
        </div>
        <div className="divider divider-horizontal mx-auto font-bold sm:px-4">O</div>
        <div className="card rounded-box grid w-full grow place-items-center border-x-4 border-primary bg-white p-8 shadow-md sm:w-3/6">
          <h5 className="font-bold">¿Es director de una institución?</h5>
          <Link className="btn-primary btn mt-4" href="/profile/institute">Registrar institución</Link>
        </div>
      </div>
    </section>
  )
}
