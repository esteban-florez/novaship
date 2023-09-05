import prisma from '../client'
import categories from '@/prisma/data/categories.json'

export default async function category() {
  await prisma.category.createMany({
    data: categories.map((category) => ({ title: category })),
  })
}
