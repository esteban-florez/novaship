import prisma from '../client'
import data from '@/prisma/data/locations.json'

export default async function location() {
  for (const [key, values] of Object.entries(data)) {
    for (const value of values) {
      await prisma.location.create({
        data: {
          title: `${key}, ${value}`,
        },
      })
    }
  }
}
