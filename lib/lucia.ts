import lucia from 'lucia-auth'
import { nextjs } from 'lucia-auth/middleware'
import prismaAdapter from '@lucia-auth/adapter-prisma'
import prisma from '@/prisma/client'
import 'lucia-auth/polyfill/node'

const env = process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD'

export const auth = lucia({
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
      name: dbUser.name,
      surname: dbUser.surname,
      email: dbUser.email,
    }
  },
})

export type Auth = typeof auth
