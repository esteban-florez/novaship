interface Props {
  owner: string
  ubication: string
}

export default function Footer({ owner, ubication }: Props) {
  return (
    <footer className="mt-4 flex flex-col justify-between gap-2 sm:flex-row md:w-11/12 lg:w-2/5 lg:gap-8">
      <div className="order-1 flex flex-row items-center justify-start gap-2 rounded-lg lg:order-none">
        <div className="placeholder avatar">
          <div className="h-8 w-8 rounded-full bg-white text-neutral-content lg:h-10 lg:w-10">
            <span />
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="font-title text-sm font-bold text-white lg:text-base">{owner}</h5>
          <small className="-mt-2 text-white">{ubication}</small>
        </div>
      </div>
      <button className="btn-primary btn-outline btn-sm btn order-2 mt-4 w-full text-sm sm:btn-md sm:mt-0 sm:w-auto lg:text-base">
        Ver más
      </button>
    </footer>
  )
}
