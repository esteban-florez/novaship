import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}
const prisma = globalForPrisma.prisma ?? new PrismaClient()

// TODO -> log event middleware
// INFO -> shows the timelapse per query
// prisma.$use(async (params, next) => {
//   const before = Date.now()
//   const result = await next(params)
//   const after = Date.now()
//   console.log(`Query ${params.model}.${params.action} took ${after - before}ms`)
//   return result
// })

// prisma.$on('query', async (e) => {
//   console.log(`\n${e.query} ${e.params}\n`)
// })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

// TODO -> no se puede añadir un registro si tiene el mismo campo que uno borrado
// async function main() {
//   prisma.$use(async (params, next) => {
//     if (params.model === 'AuthKey' || params.model === 'AuthSession' || params.model === 'AuthUser') {
//       return await next(params)
//     }

/**
     * Ignora los registros con deletedAt: Date
     *
     * No funciona correctamente cuando la query es personalizada.
     *
     * Ej: model.includes({
     *  relation1: true,
     *  relation2: {
     *    includes: {
     *      relation3: true
     *    }
     *  }
     * })
     *
     * Por lo cual hay que añadir manualmente a cada query y cada nivel en ella:
     * where: {
     *  deletedAt: null
     * }
     */
// if (params.action === 'findUnique' || params.action === 'findFirst') {
//   params.action = 'findFirst'
//   if (params.args.where) {
//     params.args.where['deletedAt'] = null
//   } else {
//     params.args['where'] = { deletedAt: null }
//   }
// }

// if (params.action === 'findMany') {
//   if (Object.hasOwn(params, 'where')) {
//     if (params.args.where.deletedAt == undefined) {
//       params.args.where['deletedAt'] = null
//     }
//   } else {
//     if (Object.hasOwn(params, 'where')) {
//       params.args['where'] = { deletedAt: null }
//     }
//   }
// }

// if (params.action === 'update') {
//   params.action = 'updateMany'
//   if (params.args.where) {
//     params.args.where['deletedAt'] = null
//   } else {
//     params.args['where'] = { deletedAt: null }
//   }
// }

// if (params.action === 'updateMany') {
//   if (params.args.where !== undefined) {
//     params.args.where['deletedAt'] = null
//   } else {
//     params.args['where'] = { deletedAt: null }
//   }
// }

/**
     * Soft delete
     */
// if (params.action === 'delete') {
//   params.action = 'update'
//   params.args.data = { deletedAt: new Date() }
// }

//   if (params.action === 'deleteMany') {
//     params.action = 'updateMany'

//     if (params.args.data !== undefined) {
//       params.args.data.deletedAt = true
//     } else {
//       params.args.data = { deletedAt: new Date() }
//     }
//   }

//   return await next(params)
// })
// }

// void main()

export default prisma
