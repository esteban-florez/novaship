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
      <span className="badge  badge-secondary">{job.title}</span>
      <div className="badge badge-ghost inline-flex gap-3 text-neutral-600">
        <span>{format({ date: from, config: { weekday: true } })}</span>
        <span>•</span>
        <span>
          {to != null
            ? format({ date: to, config: { weekday: true } })
            : 'Actualidad'}
        </span>
      </div>
      <p className="mt-3 text-sm text-neutral-600">{description}</p>
    </div>
  )
}
