interface Props {
  currentSlide: number
}

export default function Dots({ currentSlide }: Props) {
  const slideInactive = 'w-4 h-4 rounded-full bg-white/70'
  const slideActive = 'w-6 h-4 rounded-full bg-primary'

  return (
    <ul className="flex-center gap-2">
      <li
        className={`${
          currentSlide === 0 ? slideActive : slideInactive
        }`}
      />
      <li
        className={`${
          currentSlide === 1 ? slideActive : slideInactive
        }`}
      />
      <li
        className={`${
          currentSlide === 2 ? slideActive : slideInactive
        }`}
      />
      <li
        className={`${
          currentSlide === 3 ? slideActive : slideInactive
        }`}
      />
      <li
        className={`${
          currentSlide === 4 ? slideActive : slideInactive
        }`}
      />
    </ul>
  )
}
