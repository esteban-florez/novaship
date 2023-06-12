interface Props {
  title: string
  subTitles: string[]
  description: string
  owner: string
  location: string
}

export default function Offers({
  title,
  subTitles,
  description,
  owner,
  location,
}: Props) {
  return (
    <section className="mb-4 max-w-xs break-inside-avoid rounded-xl">
      <div className="relative flex w-full rounded-xl bg-primary/25">
        <div className="w-full flex-col p-6">
          <header>
            <h3 className="font-title text-xl font-bold text-white">{title}</h3>
            <ul className="-mt-2 line-clamp-2 flex flex-row flex-wrap text-sm font-semibold text-neutral-300">
              {subTitles.map((subTitle) => {
                return (
                  <li className="me-2 cursor-pointer hover:text-primary">
                    {subTitle}
                  </li>
                )
              })}
            </ul>
          </header>
          <main className="my-4">
            <p className="line-clamp-6 text-sm">{description}</p>
          </main>
          <footer className="flex flex-row justify-between gap-4">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="placeholder avatar">
                <div className="h-8 w-8 rounded-full bg-white text-neutral-content">
                  <span></span>
                </div>
              </div>
              <div className="flex flex-col">
                <h5 className="font-title text-sm font-bold text-white/90">
                  {owner}
                </h5>
                <small className="-mt-2 text-xs font-semibold">
                  {location}
                </small>
              </div>
            </div>
            <button className="btn-w-xl btn-primary btn-outline btn-sm btn w-2/6">
              Ver más
            </button>
          </footer>
        </div>
      </div>
    </section>
  )
}
