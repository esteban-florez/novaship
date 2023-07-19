type FormSubmitEvent = React.BaseSyntheticEvent<SubmitEvent, HTMLFormElement, HTMLFormElement>

type ProfileFormsType = 'profile' | 'company' | 'institute' | 'professional'

interface Skill {
  id: string
  title: string
  selected: boolean
}

type MessageStatus = 'sent' | 'read' | 'received'
