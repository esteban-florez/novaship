import { type SkillOption } from '@/lib/types'
import { XMarkIcon } from '@heroicons/react/24/outline'

type Props = React.PropsWithChildren<{
  selectedSkills: SkillOption[]
  removeSkill: (id: string) => void
}>

export default function SelectedSkills({ selectedSkills, removeSkill }: Props) {
  return (
    <>
      <p className="">Habilidades seleccionadas:</p>
      {selectedSkills.length === 0 && (
        <span className="text-neutral-400">Ninguna habilidad seleccionada.</span>
      )}
      {selectedSkills.map(skill => (
        <span key={skill.id} className="badge badge-primary badge-lg justify-between gap-1 font-semibold">
          {skill.title}
          <button onClick={() => { removeSkill(skill.id) }}>
            <XMarkIcon className="-mr-2 h-5 w-5" />
          </button>
        </span>
      ))}
    </>
  )
}
