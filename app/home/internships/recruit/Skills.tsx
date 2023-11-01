import { type Skill } from '@prisma/client'

type Props = React.PropsWithChildren<{
  skills: Skill[]
}>

export default function Skills({ skills }: Props) {
  const shown = skills.slice(0, 5)
  const { length } = skills
  const tooMany = length > 5

  return (
    <p>Habilidades: {shown.map((skill, i) => {
      const append = i === shown.length - 1
        ? tooMany ? `, ${length - 5} más...` : '.'
        : ', '
      return (
        <span key={skill.id} className="font-bold">
          {skill.title + append}
        </span>
      )
    })}
    </p>
  )
}
