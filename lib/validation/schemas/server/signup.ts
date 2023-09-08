import { nativeEnum, object, preprocess } from 'zod'
import { defaults } from '../defaults'
import { base as clientBase } from '../signup/base'
import { schema as clientPerson } from '../signup/person'
import { schema as clientNonPerson } from '../signup/non-person'
import { uniqueEmail } from './server-refinements'
import messages from '../../messages'
import { UserType } from '@prisma/client'

const base = clientBase.merge(
  object({
    image: defaults.server.image.optional(),
  })
)

const nonPersonBase = clientNonPerson.merge(base)

const personBase = clientPerson.merge(base)

const omittedKeys = { email: true, password: true } as const

export const basic = object({
  email: defaults.email.refine(uniqueEmail, 'Ya existe una cuenta con este correo.'),
  password: defaults.password,
  userType: nativeEnum(UserType, messages.enum),
})

export const person = personBase.merge(
  object({
    categories: preprocess(elementsPreprocess, defaults.ids.nonempty(messages.nonempty)),
    skills: preprocess(elementsPreprocess, defaults.ids.nonempty(messages.nonempty)),
    jobs: preprocess(elementsPreprocess, defaults.ids),
  })
).omit(omittedKeys)

export const nonPerson = nonPersonBase.merge(
  object({
    certification: defaults.server.image,
  })
).omit(omittedKeys)

function elementsPreprocess(elements: unknown) {
  if (typeof elements === 'string') {
    return elements.split(',')
  }
}
