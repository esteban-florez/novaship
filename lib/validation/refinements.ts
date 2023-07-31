import prisma from '@/prisma/client'

export const password = (password: string) => {
  const expressions = [
    /[.[\]?*+{}^$()|!\\'"@~%&°#¡¿_\-<>]/g,
    /[A-Z]/g,
    /[a-z]/g,
    /[0-9]/g,
  ]

  return expressions.map(expression => expression.test(password))
}

export const uniqueEmail = async (value: string) => {
  const options = { select: { email: true } }

  // REF -> Promise.all() para optimizar
  let models = await prisma.person.findMany(options)
  models = models.concat(await prisma.company.findMany(options))
  models = models.concat(await prisma.institute.findMany(options))

  const emails = models.map(({ email }) => email)

  console.log('value: ', value)
  console.log('emails: ', emails)
  console.log('result: ', !emails.includes(value))
}
