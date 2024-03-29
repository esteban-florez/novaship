interface Props {
  hiring: {
    offer: {
      title: string
      description: string
      categories: Array<{
        id: string
        title: string
      }>
      company: {
        name: string
      }
      job: {
        title: string
      }
    }
  }
}

export default function JobCard({ hiring }: Props) {
  const {
    offer: { title, description, categories, company, job },
  } = hiring

  return (
    <div className="p-4 rounded-xl border border-solid border-zinc-300 bg-white shadow">
      <h5 className="font-semibold">{title}</h5>
      <h6 className="text-sm font-semibold text-secondary">{company.name}</h6>
      <span className="w-full badge badge-secondary text-center line-clamp-1">
        {job.title}
      </span>
      <ul className="mt-3 inline-flex flex-wrap gap-x-2 gap-y-1">
        {categories.map((category) => {
          return (
            <li
              key={category.id}
              className="badge badge-outline badge-secondary"
            >
              {category.title}
            </li>
          )
        })}
      </ul>
      <p className="mt-3 text-sm text-neutral-600">{description}</p>
    </div>
  )
}
