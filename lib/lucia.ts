import lucia from 'lucia-auth'
import { nextjs } from 'lucia-auth/middleware'
import prismaAdapter from '@lucia-auth/adapter-prisma'
import prisma from '@/prisma/client'
import 'lucia-auth/polyfill/node'

const env = process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD'

export const auth = lucia({
  adapter: prismaAdapter(prisma),
  middleware: nextjs(),
  env,
  transformDatabaseUser(databaseUser) {
    return { ...databaseUser }
  },
  sessionExpiresIn: {
    activePeriod: 1000 * 60 * 60 * 24 * 30, // 1 month
    idlePeriod: 0,
  },
})

export type Auth = typeof auth
