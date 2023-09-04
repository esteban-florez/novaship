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

// TODO -> no se puede añadir un registro si tiene el mismo campo que uno borrado
// async function main() {
// prisma.$use(async (params, next) => {
//   if (params.model === 'AuthKey' || params.model === 'AuthSession') {
//     return await next(params)
//   }

// CHECK 3 -> No se puede incluir que omita los registros eliminados por los modelos de lucia
// No funciona correctamente al buscar cualquier registro
// if (params.action === 'findUnique' || params.action === 'findFirst') {
//   params.action = 'findFirst'
//   params.args.where['deletedAt'] = null
// }

// if (params.action === 'findMany') {
//   if (params.args.where) {
//     if (params.args.where.deletedAt == undefined) {
//       params.args.where['deletedAt'] = null
//     }
//   } else {
//     params.args['where'] = { deletedAt: null }
//   }
// }

// if (params.action === 'update') {
//   params.action = 'updateMany'
//   params.args.where['deletedAt'] = null
// }

// if (params.action === 'updateMany') {
//   if (params.args.where !== undefined) {
//     params.args.where['deletedAt'] = null
//   } else {
//     params.args['where'] = { deletedAt: null }
//   }
// }

//   if (params.action === 'delete') {
//     params.action = 'update'
//     params.args.data = { deletedAt: new Date() }
//   }

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
