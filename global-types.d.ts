type FormSubmitEvent = React.BaseSyntheticEvent<SubmitEvent, HTMLFormElement, HTMLFormElement>

type FormStatus = 'loading' | 'error' | 'success'

type MessageStatus = 'sent' | 'read' | 'received'

type Rec = Record<string, string>

type OnInputEvent = React.BaseSyntheticEvent<InputEvent, HTMLInputElement, HTMLInputElement>

type SelectOnInputEvent = React.BaseSyntheticEvent<InputEvent, HTMLSelectElement, HTMLSelectElement>
