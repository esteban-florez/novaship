import prisma from '@/prisma/client'
import { type SelectableField, type SelectableOption, type SelectablePerson, type SelectableSkill } from '../types'
import collect from '../utils/collection'

interface Props {
  arr: SelectableOption[] | undefined
  model: 'Field' | 'Skill' | 'Person' | 'Offer' | 'Membership'
  order?: 'asc' | 'desc'
}

/**
 * Se debe definir el tipo para tener autocompletado
 */
export default async function SelectableFields<T>({ arr, model, order = 'asc' }: Props): Promise<T[]> {
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

    data = collect(fields).toSelectable(false) as SelectableField[]
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

    data = collect(skills).toSelectable(false) as SelectableSkill[]
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

    data = collect(persons).toSelectable(false) as SelectablePerson[]
  }

  return data as T[]
}
