import luciaAuth from 'lucia-auth'
import { nextjs } from 'lucia-auth/middleware'
import prismaAdapter from '@lucia-auth/adapter-prisma'
import prisma from '@/prisma/client'
import 'lucia-auth/polyfill/node'

const env = process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD'

const lucia = luciaAuth({
  adapter: prismaAdapter(prisma),
  env,
  middleware: nextjs(),
  sessionExpiresIn: {
    activePeriod: 1000 * 60 * 60 * 24 * 30,
    idlePeriod: 0,
  },
  transformDatabaseUser(dbUser) {
    return {
      id: dbUser.id,
      type: dbUser.type,
    }
  },
})

export default lucia

export type Auth = typeof lucia
