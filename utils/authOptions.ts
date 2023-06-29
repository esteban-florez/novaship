import crypto from 'node:crypto'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/prisma/client'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { type NextAuthOptions } from 'next-auth'
import { type Adapter } from 'next-auth/adapters'
import { compare } from 'bcrypt'
global.crypto ??= crypto

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      // @ts-expect-error Because this package is not typesafe at all.
      async authorize({ email, password }: { email: string, password: string }) {
        // TODO -> input validation
        const user = await prisma.user.findUnique({ where: { email } })

        if (user === null) {
          return null
        }

        if (!await compare(password, user.password)) {
          return null
        }

        return user
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
}

export default authOptions
