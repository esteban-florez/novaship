type FormSubmitEvent = React.BaseSyntheticEvent<SubmitEvent, HTMLFormElement, HTMLFormElement>

type FormStatus = 'loading' | 'error' | 'success'

type UserType = 'COMPANY' | 'INSTITUTE' | 'PERSON'

interface SessionUser {
  id: string
  type: UserType // TODO -> probar si funciona con UserType de @prisma/client
}

type MessageStatus = 'sent' | 'read' | 'received'

type Rec = Record<string, string>
