import { Prisma } from '@prisma/client'
import { ZodError } from 'zod'

const prismaErrors = [
  Prisma.PrismaClientInitializationError,
  Prisma.PrismaClientKnownRequestError,
  Prisma.PrismaClientRustPanicError,
  Prisma.PrismaClientUnknownRequestError,
  Prisma.PrismaClientValidationError,
]

export function handleError(error: unknown, data: Record<string, unknown> = {}) {
  // TODO -> handle possible auth error
  if (error instanceof SyntaxError) {
    console.log('Route Handler Error (verify schema validation and data sending): ')

    return {
      status: 400,
      body: {
        errorType: 'REQUEST_SYNTAX',
      },
    }
  }

  if (error instanceof ZodError) {
    const { fieldErrors } = error.flatten()

    return {
      status: 422,
      body: {
        errorType: 'VALIDATION',
        errors: fieldErrors,
      },
      data,
    }
  }

  const isPrismaError = prismaErrors
    .some(prismaError => error instanceof prismaError)

  if (isPrismaError) {
    console.log('Route Handler Error (verify schema validation and data sending): ', error)

    return {
      status: 500,
      body: {
        errorType: 'SERVER',
      },
    }
  }

  throw error
}
