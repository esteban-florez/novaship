import prisma from '@/prisma/client'
import { type FieldOption, type FieldSelectable, type OfferOption, type OfferSelectable, type PersonOption, type PersonSelectable, type SelectableOption, type SkillOption, type SkillSelectable } from '../types'
import addSelectedProp from '../selectable'

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

    data = addSelectedProp<FieldOption>(fields, selected) as FieldSelectable[]
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

    data = addSelectedProp<SkillOption>(skills, selected) as SkillSelectable[]
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

    data = addSelectedProp<PersonOption>(persons, selected) as PersonSelectable[]
  }

  if (model === 'Offer') {
    const offers = await prisma.offer.findMany({
      where: {
        id: {
          notIn: arr?.map(offer => offer.id),
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

    data = addSelectedProp<OfferOption>(offers, selected) as OfferSelectable[]
  }

  return data as T[]
}
