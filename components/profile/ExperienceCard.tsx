import { format } from '@/lib/utils/date'

interface Props {
  experience: {
    name: string
    description: string | null
    job: {
      title: string
    }
    to: Date | null
    from: Date
  }
}

export default function ExperienceCard({ experience }: Props) {
  const { name, job, from, to, description } = experience

  return (
    <div className="p-4 rounded-xl border border-solid border-zinc-300 bg-white shadow">
      <h6 className="font-semibold">{name}</h6>
      <span className="w-full badge badge-sm badge-secondary text-center line-clamp-1">
        {job.title}
      </span>
      <div className="mt-3 flex flex-col sm:flex-row flex-wrap gap-1 text-neutral-600">
        <p className="badge badge-sm badge-outline">
          <span>{format({ date: from, config: { weekday: true } })}</span>
        </p>
        <p className="badge badge-sm badge-outline">
          <span>
            {to != null
              ? format({ date: to, config: { weekday: true } })
              : 'Actualidad'}
          </span>
        </p>
      </div>
      <p className="mt-3 text-sm text-neutral-600">{description}</p>
    </div>
  )
}
