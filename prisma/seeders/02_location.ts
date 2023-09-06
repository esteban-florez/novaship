import prisma from '../client'
import locations from '@/prisma/data/locations.json'

export default async function location() {
  for (const [key, values] of Object.entries(locations)) {
    for (const value of values) {
      await prisma.location.create({
        data: {
          title: `${key}, ${value}`,
        },
      })
    }
  }
}
