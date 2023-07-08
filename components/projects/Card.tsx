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
      <header className="rounded-t-lg bg-primary px-6 py-3">
        <h3 className="font-title text-lg font-bold text-white sm:text-xl">{title}</h3>
        <ul className="-mt-2 line-clamp-2 flex flex-row flex-wrap text-sm text-neutral-300">
          {categories.map(category => {
            return (
              <li className="me-1 cursor-pointer after:text-neutral-300 after:content-[','] last:after:content-[] hover:text-accent" key={category}>
                {category}
              </li>
            )
          })}
        </ul>
      </header>
      <main className="bg-white/10 px-6 py-4">
        <p className="line-clamp-6 text-sm">{description}</p>
      </main>
      <footer className="flex flex-col justify-between gap-4 rounded-b-lg bg-white/10 px-6 pb-4 sm:flex-row">
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="placeholder avatar">
            <div className="h-8 w-8 rounded-full bg-white" />
          </div>
          <div className="flex flex-col">
            <h5 className="font-title text-sm font-bold text-white">
              {owner}
            </h5>
            <small className="-mt-1 text-xs font-semibold">
              {ubication}
            </small>
          </div>
        </div>
        <button className="btn-primary btn-outline btn-sm btn w-full text-xs md:w-2/6">
          Ver más
        </button>
      </footer>
    </>
  )
}
