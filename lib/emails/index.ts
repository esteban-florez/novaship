import nodemailer from 'nodemailer'

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env

const transport = nodemailer.createTransport({
  // @ts-expect-error Nodemailer host
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
})

const sendMail = transport.sendMail.bind(transport)

export default sendMail
