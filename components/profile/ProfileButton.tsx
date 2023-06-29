type Props = React.PropsWithChildren<{
  form: ProfileFormsType
  selectedForm: ProfileFormsType
  setSelectedForm: (form: ProfileFormsType) => void
}>

export default function ProfileButton({ form, selectedForm, setSelectedForm, children }: Props) {
  const btnActive = 'w-full sm:w-2/6 grid h-20 bg-primary rounded-box place-items-center'
  const btnInactive = 'w-full sm:w-2/6 grid h-20 bg-neutral hover:bg-primary rounded-box place-items-center'

  return (
    <button
      onClick={() => { setSelectedForm(form) }} className={`${selectedForm === form ? btnActive : btnInactive}`}
    >
      <h5 className="font-bold">{children}</h5>
    </button>
  )
}
