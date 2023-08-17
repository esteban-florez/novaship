import prisma from '@/prisma/client'
import addSelectedProp from '../selectable'
import { type OptionField, type OptionPerson, type OptionSkill, type SelectableField, type SelectableOption, type SelectablePerson, type SelectableSkill } from '../types'

interface Props {
  arr: SelectableOption[] | undefined
  model: 'Field' | 'Skill' | 'Person' | 'Offer' | 'Membership'
  order?: 'asc' | 'desc'
  selected?: boolean
}

/**
 * Se debe definir el tipo para tener autocompletado
 */
export default async function SelectableFields<T>({ arr, model, order = 'asc', selected = false }: Props): Promise<T[]> {
  let data
  if (model === 'Field') {
    const fields = await prisma.field.findMany({
      where: {
        id: {
          notIn: arr?.map(field => field.id),
        },
      },
      select: {
        id: true,
        title: true,
      },
      orderBy: {
        title: order,
      },
    })

    data = addSelectedProp<OptionField>(fields, selected) as SelectableField[]
  }

  if (model === 'Skill') {
    const skills = await prisma.skill.findMany({
      where: {
        id: {
          notIn: arr?.map(skill => skill.id),
        },
      },
      select: {
        id: true,
        title: true,
      },
      orderBy: {
        title: order,
      },
    })

    data = addSelectedProp<OptionSkill>(skills, selected) as SelectableSkill[]
  }

  if (model === 'Person') {
    const persons = await prisma.person.findMany({
      where: {
        id: {
          notIn: arr?.map(person => person.id),
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
      orderBy: {
        name: order,
      },
    })

    data = addSelectedProp<OptionPerson>(persons, selected) as SelectablePerson[]
  }

  return data as T[]
}
