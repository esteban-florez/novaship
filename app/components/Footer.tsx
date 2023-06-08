import { text } from '../fonts'

export default function Footer() {
  return (
    <footer className='footer w-full flex-row border-t-2 border-gray_divisor p-4'>
      <p className={`mx-auto ${text.className}`}>
        Copyright © 2023 - Todos los derechos reservados | PasantíasApp
      </p>
    </footer>
  )
}
