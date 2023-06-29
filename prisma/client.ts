import { PrismaClient } from '@prisma/client'

const devOptions = {
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
}

const prisma = new PrismaClient(
  process.env.NODE_ENV === 'development' ? devOptions : undefined,
)

export default prisma
