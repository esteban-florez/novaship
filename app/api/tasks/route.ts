// import { NextResponse, type NextRequest } from 'next/server'
// import { schema } from '@/lib/validation/schemas/task'
// import { handleError } from '@/lib/errors/api'
// import { auth } from '@/lib/auth/api'
// import { url } from '@/lib/utils/url'
// import prisma from '@/prisma/client'

// export async function POST(request: NextRequest) {
//   let data
//   try {
//     data = await request.json()
//     const parsed = schema.parse(data)
//     const user = await auth.person(request)
//     console.log(parsed)

//     const task = await prisma.task.create({
//       data: {
//         ...parsed,
//         person: {
//           connect: {
//             id: user.id,
//           },
//         },
//         project: {
//           connect: data.selectedProject.map((project: { id: string }) => {
//             return {
//               id: project.id,
//             }
//           }),
//         },
//       },
//     })

//     return NextResponse.redirect(url('/home/projects'))
//   } catch (error) {
//     handleError(error, data)
//   }
// }
