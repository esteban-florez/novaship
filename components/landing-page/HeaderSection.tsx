import IllustrationColumn from './IllustrationColumn'
import WelcomeColumn from './WelcomeColumn'

export default function HeaderSection() {
  return (
    <header className="flex flex-col border-b bg-neutral-200 pt-48 md:pb-16 md:pt-20">
      <div className="relative flex flex-col py-4 md:flex-row">
        <WelcomeColumn />
        <IllustrationColumn />
      </div>
    </header>
  )
}
