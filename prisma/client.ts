import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient({
  // log: [
  //   {
  //     emit: 'event',
  //     level: 'query',
  //   },
  // ],
})

// prisma.$on('query', async (e) => {
//   console.log(`\n${e.query} ${e.params}\n`)
// })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export default prisma
