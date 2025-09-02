import { Prisma } from '@prisma/client'
import { ZodError } from 'zod'
import { AuthenticationError } from './reference'
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
  // TODO -> Ver que hacer con estos errores
  if (error instanceof AuthenticationError) {
    return NextResponse.redirect(url('/auth/login?alert=login_needed'))
  }

  if (error instanceof SyntaxError) {
    console.log('Route Handler Error (verify schema validation and data sending): ', error)

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
    // TODO -> error de campos únicos, dar respuesta para el front-end.
    // P2002
    // "Unique constraint failed on the {constraint}"
    console.log('Route Handler Error (verify schema validation and data sending): ', error)

    return json(500, {
      errorType: 'SERVER',
    })
  }

  throw error
}
