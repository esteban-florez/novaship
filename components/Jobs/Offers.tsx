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
      <div className="relative flex bg-primary/25 rounded-xl w-full">
        <div className="flex-col w-full p-6">
          <header>
            <h3 className="text-xl font-title font-bold text-white">{title}</h3>
            <ul className="-mt-2 line-clamp-2 flex flex-row flex-wrap text-neutral-300 text-sm font-semibold">
              {subTitles.map((subTitle) => {
                return (
                  <li className="me-2 hover:text-primary cursor-pointer">
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
            <div className="flex flex-row justify-center items-center gap-2">
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
            <button className="btn btn-sm w-2/6 btn-outline btn-w-xl btn-primary">
              Ver más
            </button>
          </footer>
        </div>
      </div>
    </section>
  )
}
