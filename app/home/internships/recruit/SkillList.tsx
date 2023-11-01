import { type Skill } from '@prisma/client'

type Props = React.PropsWithChildren<{
  skills: Skill[]
}>

export default function SkillList({ skills }: Props) {
  return (
    <div className="flex flex-wrap gap-1">
      {skills.map(skill => (
        <span key={skill.id} className="rounded-3xl w-fit text-primary text-sm px-4 font-semibold border-primary border bg-primary/10 max-w-[20ch] overflow-ellipsis overflow-hidden whitespace-nowrap">
          {skill.title}
        </span>
      ))}
    </div>
  )
}
