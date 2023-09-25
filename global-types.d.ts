type FormSubmitEvent = React.BaseSyntheticEvent<SubmitEvent, HTMLFormElement, HTMLFormElement>

type FormStatus = 'loading' | 'error' | 'success'

type MessageStatus = 'sent' | 'read' | 'received'

type Rec = Record<string, string>

type OnInputEvent = React.BaseSyntheticEvent<InputEvent, HTMLInputElement, HTMLInputElement, HTMLTextAreaElement>

type SelectOnInputEvent = React.BaseSyntheticEvent<InputEvent, HTMLSelectElement, HTMLSelectElement>

type SelectOptionsArray = Array<{ value: string, label: string }>

interface SearchParamsProps { searchParams: Record<string, string | string[] | undefined> }

interface FormProps {
  backUrl: string
  method: 'POST' | 'PUT'
  action: string
}

type SelectOptionsConfig = {
  type: 'enum'
  data: Rec
  translation: Rec
} | {
  type: 'rows'
  label?: string
  data: Array<{
    id: string
    name: string
  } | {
    id: string
    title: string
  }>
}

interface PageContext {
  params: {
    id: string
  }
}

interface QueryConfig<T> {
  where?: T
  skip?: number
  take?: number
}

type AlertType = 'info' | 'warning' | 'error' | 'success' | 'loading'

interface AlertData {
  type: AlertType
  message: string
}
