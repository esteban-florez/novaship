import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

interface Skill {
  id: string
  title: string
}

interface Props {
  companyId: string
  userId: string
  skills: Skill[]
  userSkills: string[]
}

export default function Skills({
  companyId,
  userId,
  skills,
  userSkills,
}: Props) {
  const skillMatch = (skills: string[], id: string) => {
    if (userId === companyId) {
      return <span className="w-5 h-5 bg-secondary rounded-full" />
    }

    if (skills.includes(id)) {
      return <CheckCircleIcon className="h-5 w-5 text-primary" />
    }

    return <XCircleIcon className="h-5 w-5 text-neutral-600" />
  }

  return (
    <ul className="mt-2 flex flex-col sm:flex-row gap-4">
      {skills.map((skill) => {
        return (
          <div
            className="flex items-center gap-1.5"
            key={skill.id}
          >
            {skillMatch(userSkills, skill.id)}
            <li className="text-base md:text-lg">{skill.title}</li>
          </div>
        )
      })}
    </ul>
  )
}
