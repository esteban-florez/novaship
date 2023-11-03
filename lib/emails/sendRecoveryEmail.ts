import { render } from '@react-email/render'
import sendMail from '.'
import PasswordRecovery from './PasswordRecovery'

export default async function sendRecoveryEmail(email: string, resetId: string, username: string) {
  const emailComponent = PasswordRecovery({
    resetId,
    username,
    createdAt: new Date(),
  })

  await sendMail({
    to: email,
    from: 'team@novaship.dev',
    subject: 'Recuperación de contraseña - Novaship',
    html: render(emailComponent),
  })
}
