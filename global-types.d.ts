type FormSubmitEvent = React.BaseSyntheticEvent<SubmitEvent, HTMLFormElement, HTMLFormElement>

type FormStatus = 'loading' | 'error' | 'success'

type MessageStatus = 'sent' | 'read' | 'received'

type Rec = Record<string, string>

type OnInputEvent = React.BaseSyntheticEvent<InputEvent, HTMLInputElement, HTMLInputElement, HTMLTextAreaElement>

type SelectOnInputEvent = React.BaseSyntheticEvent<InputEvent, HTMLSelectElement, HTMLSelectElement>

type SelectOptionsArray = Array<{ value: string, label: string }>

type SelectOptionsConfig = {
  type: 'enum'
  data: Rec
  translation: Rec
} | {
  type: 'rows'
  data: Array<{
    id: string
    name: string
  } | {
    id: string
    title: string
  }>
}
