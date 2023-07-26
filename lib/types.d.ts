type FormSubmitEvent = React.BaseSyntheticEvent<SubmitEvent, HTMLFormElement, HTMLFormElement>

type FormStatus = 'loading' | 'error' | 'success'

type FormControls = Array<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>

type ProfileFormsType = 'profile' | 'company' | 'institute' | 'professional'

interface Skill {
  id: string
  title: string
  selected: boolean
}

interface SessionUser {
  id: string
  name: string
  surname: string
  email: string
}

type MessageStatus = 'sent' | 'read' | 'received'
