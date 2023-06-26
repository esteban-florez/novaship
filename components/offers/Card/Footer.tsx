interface Props {
  owner: string
  ubication: string
}

export default function Footer({ owner, ubication }: Props) {
  return (
    <footer className="flex flex-col justify-between gap-4 rounded-b-lg bg-white/10 px-6 pb-4 sm:flex-row">
      <div className="flex flex-row items-center justify-center gap-2">
        <div className="placeholder avatar">
          <div className="h-8 w-8 rounded-full bg-white" />
        </div>
        <div className="flex flex-col">
          <h5 className="font-title text-sm font-bold text-white">
            {owner}
          </h5>
          <small className="-mt-2 text-xs font-semibold">
            {ubication}
          </small>
        </div>
      </div>
      <button className="btn-primary btn-outline btn-sm btn w-full text-xs md:w-2/6">
        Ver más
      </button>
    </footer>
  )
}
