import { NextResponse, type NextRequest } from 'next/server'
import { auth, handleRequest } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import lucia from '@/lib/auth/lucia'
import { person, nonPerson, basic } from '@/lib/validation/schemas/server/signup'
import prisma from '@/prisma/client'
import { type z } from 'zod'
import { storeFile } from '@/lib/storage/storeFile'
import logEvent from '@/lib/data-fetching/log'
import { logs } from '@/lib/log'

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

    const profileImagePath = parsed.image !== undefined
      ? await storeFile(parsed.image)
      : null

    const shared = { email, authUserId: id, image: profileImagePath }

    if (userType === 'PERSON') {
      await prisma.person.create({
        data: {
          ...parsed as PersonData,
          ...shared,
          skills: {
            connect: (parsed as PersonData).skills.map(skill => ({ id: skill })),
          },
          categories: {
            connect: (parsed as PersonData).categories.map(categories => ({ id: categories })),
          },
          jobs: {
            connect: (parsed as PersonData).jobs.map(job => ({ id: job })),
          },
        },
      })

      const session = await lucia.createSession(authUser.id)
      authRequest.setSession(session)

      const { authUserId } = await auth.user(request)
      const { signup: { message, model, status } } = logs
      await logEvent({
        action: message,
        model,
        status,
        authUserId,
      })

      return NextResponse.redirect(url('/home'))
    }

    const nonPersonData = parsed as NonPersonData
    const certification = await storeFile(nonPersonData.certification)

    if (userType === 'COMPANY') {
      await prisma.company.create({
        data: { ...nonPersonData, ...shared, certification },
      })
    } else {
      await prisma.institute.create({
        data: { ...nonPersonData, ...shared, certification },
      })
    }

    return NextResponse.redirect(url('/auth/login?modal=registered'))
  } catch (error) {
    console.log(error)
    return handleError(error, data)
  }
}
