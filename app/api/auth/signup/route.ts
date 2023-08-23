import { NextResponse, type NextRequest } from 'next/server'
import { handleRequest } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import lucia from '@/lib/auth/lucia'
import { person, nonPerson, basic } from '@/lib/validation/schemas/server/signup'
import prisma from '@/prisma/client'
import { type z } from 'zod'

type PersonData = z.infer<typeof person>
type NonPersonData = z.infer<typeof nonPerson>

export async function POST(request: NextRequest) {
  let data
  try {
    const authRequest = handleRequest(request)
    // DRY 10 -> Mismo codigo de /api/auth/login
    if (await authRequest.validate() !== null) {
      return NextResponse.redirect(url('/home'))
    }

    const formData = await request.formData()
    data = Object.fromEntries(formData.entries())

    const { userType, email, password } = await basic.parseAsync(data)

    const parsed = userType === 'PERSON'
      ? person.parse(data)
      : nonPerson.parse(data)

    const authUser = await lucia.createUser({
      primaryKey: {
        providerId: 'email',
        providerUserId: email,
        password,
      },
      attributes: { type: userType },
    })

    const id = authUser.id as string

    // TODO -> falta meter aqui los links de la imagen y la certificacion
    const shared = { email, authUserId: id, image: null }

    if (userType === 'PERSON') {
      await prisma.person.create({
        data: {
          ...parsed as PersonData,
          ...shared,
          skills: {
            connect: (parsed as PersonData).skills.map(skill => ({ id: skill })),
          },
          fields: {
            connect: (parsed as PersonData).fields.map(fields => ({ id: fields })),
          },
        },
      })
    } else if (userType === 'COMPANY') {
      await prisma.company.create({
        data: { ...parsed as NonPersonData, ...shared, certification: 'TODO' },
      })
    } else {
      await prisma.institute.create({
        data: { ...parsed as NonPersonData, ...shared, certification: 'TODO' },
      })
    }

    const session = await lucia.createSession(authUser.id)
    authRequest.setSession(session)

    return NextResponse.redirect(url('/home'))
  } catch (error) {
    console.log(error)
    return handleError(error, data)
  }
}
