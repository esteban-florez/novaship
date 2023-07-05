interface Props {
  owner: string
  ubication: string
}

export default function Footer({ owner, ubication }: Props) {
  return (
    <footer className="mt-4 flex flex-col justify-center gap-2 lg:flex-row lg:justify-start lg:gap-8">
      <div className="order-1 flex flex-row items-center justify-center gap-2 rounded-lg bg-white/50 px-4 py-2 lg:order-none">
        <div className="placeholder avatar">
          <div className="h-8 w-8 rounded-full bg-white text-neutral-content lg:h-10 lg:w-10">
            <span />
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="font-title text-sm font-bold lg:text-base">{owner}</h5>
          <small className="-mt-2 font-semibold">{ubication}</small>
        </div>
      </div>

      <div className="flex-center order-2 mt-2 flex-row lg:order-none lg:mt-0">
        <button className="btn-primary btn text-sm lg:text-base">
          Ver más
        </button>
      </div>
    </footer>
  )
}
