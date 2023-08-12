import { Prisma } from '@prisma/client'
import { ZodError } from 'zod'
import { AuthError } from './reference'
import { NextResponse } from 'next/server'
import { url } from '../utils/url'

const prismaErrors = [
  Prisma.PrismaClientInitializationError,
  Prisma.PrismaClientKnownRequestError,
  Prisma.PrismaClientRustPanicError,
  Prisma.PrismaClientUnknownRequestError,
  Prisma.PrismaClientValidationError,
]

function json(status: number, body: object) {
  return NextResponse.json(body, { status })
}

export function handleError(error: unknown, data: Record<string, unknown> = {}) {
  if (error instanceof AuthError) {
    return NextResponse.redirect(url('auth/login?redirected'))
  }

  if (error instanceof SyntaxError) {
    console.log('Route Handler Error (verify schema validation and data sending): ')

    return json(400, {
      errorType: 'REQUEST_SYNTAX',
    })
  }

  if (error instanceof ZodError) {
    const { fieldErrors } = error.flatten()

    return json(422, {
      errorType: 'VALIDATION',
      errors: fieldErrors,
      data,
    })
  }

  const isPrismaError = prismaErrors
    .some(prismaError => error instanceof prismaError)

  if (isPrismaError) {
    console.log('Route Handler Error (verify schema validation and data sending): ', error)

    return json(500, {
      errorType: 'SERVER',
    })
  }

  throw error
}