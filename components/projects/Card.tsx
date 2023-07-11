interface Props {
  title: string
  categories: string[]
  owner: string
  ubication: string
  description: string
}

export default function Header({ title, categories, owner, ubication, description }: Props) {
  return (
    <>
      <div className="container">
        <header className="rounded-t-lg bg-primary px-6 py-3">
          <div className="flex flex-col">
            <h3 className="font-title text-lg font-bold text-white sm:text-xl">{title}</h3>
            <h5 className="-mt-1 line-clamp-6 text-sm text-white">{owner}</h5>
          </div>
        </header>
        <div className="rounded-lg bg-base-200 px-6 py-4 shadow">
          <p className="line-clamp-6 pb-3 text-sm">{description}</p>
          <div className="flex w-full flex-row items-center justify-between gap-2">
            <button className="btn-primary btn-outline btn-sm btn w-2/6 text-xs">
              Ver más
            </button>
            <h4 className="-mt-1 text-2xl font-semibold">
              130$
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}
