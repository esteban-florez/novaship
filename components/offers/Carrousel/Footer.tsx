interface Props {
  owner: string
  ubication: string
}

export default function Footer({ owner, ubication }: Props) {
  return (
    <footer className="mt-4 flex flex-col justify-center gap-2 sm:flex-row sm:justify-between">
      <div className="order-1 flex flex-row items-center justify-center gap-2 rounded-lg bg-primary/20 px-4 py-2 transition-colors delay-150 hover:bg-primary/60 sm:order-none">
        <div className="placeholder avatar">
          <div className="h-8 w-8 rounded-full bg-white text-neutral-content sm:h-10 sm:w-10">
            <span />
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="font-title text-sm font-bold lg:text-base">{owner}</h5>
          <small className="-mt-2 font-semibold">{ubication}</small>
        </div>
      </div>

      <div className="flex-center order-2 mt-2 flex-row sm:order-none sm:mt-0">
        <button className="btn-primary btn-wide btn-sm btn text-sm sm:text-base">
          Ver más
        </button>
      </div>
    </footer>
  )
}
