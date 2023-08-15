import { handleError } from '@/lib/errors/api'
import { auth } from '@/lib/auth/api'
import { schema } from '@/lib/validation/schemas/project'
import { type NextRequest } from 'next/server'

export async function PUT(request: NextRequest) {
  // TODO -> y que pasa si el proyecto lo crea una empresa?
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const user = await auth.person(request)

    console.log(data, parsed, user)

    // await prisma.project.create({
    //   data: {
    //     ...parsed,
    //     person: {
    //       connect: {
    //         id: user.id,
    //       },
    //     },
    //     fields: {
    //       connect: data.selectedFields.map((field: { id: string }) => {
    //         return {
    //           id: field.id,
    //         }
    //       }),
    //     },
    //     memberships: {
    //       createMany: {
    //         data: data.selectedPersons.map((person: { id: string }) => {
    //           return {
    //             personId: person.id,
    //           }
    //         }),
    //       },
    //     },
    //   },
    // })

    // return NextResponse.redirect(url('home/projects'))
  } catch (error) {
    return handleError(error, data)
  }
}
