import { useEffect, useRef } from 'react'

export default function useClickOutside<T extends HTMLElement>(onClickOutside: () => void) {
  const ref = useRef<T>(null)

  useEffect(() => {
    function handleClickOutside({ target }: MouseEvent) {
      if (ref.current === null || ref.current.contains(target as Node)) {
        return
      }

      onClickOutside()
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => { document.removeEventListener('mousedown', handleClickOutside) }
  }, [ref, onClickOutside])

  return ref
}
