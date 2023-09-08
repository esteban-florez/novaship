import prisma from '../client'
import collect from '@/lib/utils/collection'
import data from '@/prisma/data/features.json'

export default async function feature() {
  const contracts = await prisma.contract.findMany({ select: { id: true } })

  for (let i = 0; i < data.titles.length; i++) {
    await prisma.feature.create({
      data: {
        title: data.titles[i],
        description: data.descriptions[i],
        contractId: collect(contracts).random().first().id,
      },
    })
  }
}
