import prisma from '../client'
import data from '@/prisma/data/fields.json'

const fields = data

export default async function field() {
  await prisma.field.createMany({
    data: fields.map((field) => ({ title: field })),
  })
}
