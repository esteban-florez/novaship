import prisma from '../client'
import collect from '@/lib/utils/collection'
import data from '@/prisma/data/questions.json'

export default async function question() {
  const contracts = await prisma.contract.findMany({ select: { id: true } })

  for (let i = 0; i < data.answers.length; i++) {
    await prisma.question.create({
      data: {
        content: data.contents[i],
        answer: data.answers[i],
        contractId: collect(contracts).random().first().id,
      },
    })
  }
}
