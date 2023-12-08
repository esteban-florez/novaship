import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Button,
} from '@react-email/components'
import * as React from 'react'

interface Props {
  username: string
  createdAt: Date
  resetId: string
}

const baseUrl = process.env.BASE_URL ?? 'http://localhost:3000'

export const PasswordRecovery = ({
  username = 'Esteban Florez',
  createdAt = new Date(),
  resetId = 'alskdl1kldk1l2kdl1k2dlk',
}: Props) => {
  const formattedDate = new Intl.DateTimeFormat('es', {
    dateStyle: 'medium',
    timeStyle: 'medium',
  }).format(createdAt)

  return (
    <Html>
      <Head />
      <Preview>Recuperación de contraseña - Novaship</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Row>
              <Column>
                <Img
                  width={70}
                  src={`${baseUrl}/logo.ico`}
                />
              </Column>
              <Column>
                <Text style={title}>Novaship</Text>
              </Column>
            </Row>
          </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>Hola {username},</Text>
            <Text style={paragraph}>
              Hemos recibido una solicitud de recuperación de contraseña para su
              cuenta de Novaship el {formattedDate}. Si fuiste tú, puedes
              ingresar una nueva contraseña aquí:
            </Text>
            <Button
              style={button}
              pX={16}
              pY={16}
              href={`${baseUrl}/auth/password-recovery?resetId=${resetId}`}
            >
              Recuperar contraseña
            </Button>
            <Text style={paragraph}>
              Si no quieres cambiar tu contraseña o no realizaste esta
              solicitud, simplemente ignora y elimina este mensaje.
            </Text>
            <Text style={paragraph}>
              Para mantener tu cuenta segura, por favor no reenvíes este correo
              a nadie.
            </Text>
            <Text style={paragraph}>
              Gracias,
              <br />
              Equipo de soporte de Novaship
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Text style={{ textAlign: 'center', color: '#706a7b' }}>
            © {new Date().getFullYear()} Novaship, Todos los derechos reservados{' '}
            <br />
            Santa Cruz de Aragua, Venezuela
          </Text>
        </Section>
      </Body>
    </Html>
  )
}

export default PasswordRecovery

const fontFamily = 'Ubuntu,HelveticaNeue,Helvetica,Arial,sans-serif'

const main = {
  backgroundColor: '#efeef1',
  fontFamily,
}

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
}

const container = {
  width: '580px',
  margin: '30px auto',
  backgroundColor: '#ffffff',
}

const footer = {
  width: '580px',
  margin: '0 auto',
}

const content = {
  padding: '5px 50px 10px 60px',
}

const logo = {
  display: 'flex',
  justifyContent: 'center',
  alingItems: 'center',
  padding: 30,
}

const button = {
  backgroundColor: '#a55eea',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  padding: '30px',
  fontWeight: '500',
}

const sectionsBorders = {
  width: '100%',
  display: 'flex',
}

const sectionBorder = {
  borderBottom: '1px solid rgb(238,238,238)',
  width: '249px',
}

const sectionCenter = {
  borderBottom: '1px solid rgb(145,71,255)',
  width: '102px',
}

const title = {
  fontSize: '25px',
  fontWeight: 'bold',
  color: '#a55eea',
}
