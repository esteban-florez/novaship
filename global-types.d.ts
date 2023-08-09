type FormSubmitEvent = React.BaseSyntheticEvent<SubmitEvent, HTMLFormElement, HTMLFormElement>

type FormStatus = 'loading' | 'error' | 'success'

type MessageStatus = 'sent' | 'read' | 'received'

type Rec = Record<string, string>

type StepProps = React.PropsWithChildren<{
  goNext: () => void
  goBack: () => void
}>
