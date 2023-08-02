import prisma from '../client'
import data from '@/prisma/seeds-data.json'

const fields = data.fields

export default async function field() {
  await prisma.field.createMany({
    data: fields.map((field) => ({ title: field })),
  })
}
