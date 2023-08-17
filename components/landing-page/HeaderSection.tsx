import IllustrationColumn from './IllustrationColumn'
import WelcomeColumn from './WelcomeColumn'

export default function HeaderSection() {
  return (
    <header className="flex flex-col border-b bg-neutral-200 md:py-16">
      <h1 className="mb-6 pt-4 text-center text-6xl font-bold text-primary md:pt-0">Novaship</h1>
      <div className="relative flex flex-col py-4 md:flex-row">
        <WelcomeColumn />
        <IllustrationColumn />
      </div>
    </header>
  )
}
