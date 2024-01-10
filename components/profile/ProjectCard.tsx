import { type ModelData } from '@/lib/types'
import { EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Props {
  project: {
    id: string
    title: string
    description: string
    code: string
    teamwork: string
    categories: ModelData[]
  }
}

export default function ProjectCard({ project }: Props) {
  const { id, title, teamwork, code, categories, description } = project

  return (
    <div className="flex flex-col gap-3">
      <h6 className="font-semibold">{title}</h6>
      <div className="-mt-4 flex gap-1 text-neutral-600 text-sm">
        <span>({code})</span>
        <span>Equipo de trabajo - {teamwork}</span>
      </div>
      <ul className="flex flex-wrap gap-1">
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
      <p className="text-sm text-neutral-600">{description}</p>
      <Link
        href={`/home/projects/${id}`}
        className="btn btn-secondary"
      >
        <EyeIcon className="w-5 h-5" />
        Ver proyecto
      </Link>
    </div>
  )
}
