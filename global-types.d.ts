type FormSubmitEvent = React.BaseSyntheticEvent<SubmitEvent, HTMLFormElement, HTMLFormElement>

type FormStatus = 'loading' | 'error' | 'success'

type FormControls = Array<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>

type UserType = 'COMPANY' | 'INSTITUTE' | 'PERSON'

interface SessionUser {
  id: string
  type: UserType
}

type MessageStatus = 'sent' | 'read' | 'received'

type Rec = Record<string, string>
