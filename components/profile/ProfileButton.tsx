type Props = React.PropsWithChildren<{
  form: ProfileFormsType
  selectedForm: ProfileFormsType
  setSelectedForm: (form: ProfileFormsType) => void
}>

export default function ProfileButton({ form, selectedForm, setSelectedForm, children }: Props) {
  const btnActive = 'tab-lg tab-active btn normal-case'
  const btnInactive = 'tab-lg tab'

  return (
    <button
      onClick={() => { setSelectedForm(form) }} className={`${selectedForm === form ? btnActive : btnInactive}`}
    >
      <h5 className="font-bold">{children}</h5>
    </button>
  )
}
