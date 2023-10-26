import nodemailer, { type SentMessageInfo } from 'nodemailer'
import { type ComponentMail, buildSendMail } from 'mailing-core'

let sendMail = async (mail: ComponentMail): Promise<SentMessageInfo | 'delivered!' | undefined> => {
  console.log('Mail not sent, enviroment mail config not defined: ', mail.to)
  return undefined
}

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env
if (MAIL_HOST !== undefined &&
  MAIL_PORT !== undefined &&
  MAIL_USER !== undefined &&
  MAIL_PASS !== undefined
) {
  const transport = nodemailer.createTransport({
    // @ts-expect-error Nodemailer host
    host: MAIL_HOST,
    port: MAIL_PORT,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
  })

  sendMail = buildSendMail({
    transport,
    defaultFrom: 'novaship@novaship.com',
    configPath: './mailing.config.json',
  })
}

export default sendMail
