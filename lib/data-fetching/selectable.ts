import prisma from '@/prisma/client'
import collect from '../utils/collection'

interface Props {
  model: 'field' | 'skill' | 'person'
  excluded?: Array<{ id: string }>
  order?: 'asc' | 'desc'
}

/**
 * Se debe definir el tipo para tener autocompletado.
 */
export default async function selectable<T>({ excluded, model, order = 'asc' }: Props): Promise<T[]> {
  let data
  const excludedIds = excluded?.map(model => model.id)

  if (model === 'field') {
    const fields = await prisma.field.findMany({
      where: {
        id: {
          notIn: excludedIds,
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

    data = fields
  }

  if (model === 'skill') {
    const skills = await prisma.skill.findMany({
      where: {
        id: {
          notIn: excludedIds,
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

    data = skills
  }

  if (model === 'person') {
    const persons = await prisma.person.findMany({
      where: {
        id: {
          notIn: excludedIds,
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

    data = persons
  }

  return collect(data as unknown[]).toSelectable() as T[]
}
