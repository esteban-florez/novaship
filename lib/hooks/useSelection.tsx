import SelectionBox from '@/components/SelectionBox'
import { useRef, useState } from 'react'

declare global {
  // eslint-disable-next-line no-var
  var wait: boolean
}

interface Coords {
  inX: number
  inY: number
  cuX: number
  cuY: number
}

const getOffset = (ini: number, cu: number) => ini < cu ? ini : cu

function getCoords(initial: [number, number], current: [number, number]) {
  const [inX, inY] = initial
  const [cuX, cuY] = current

  return { inX, inY, cuX, cuY }
}

function getSize(coords: Coords) {
  const { cuX, cuY, inX, inY } = coords
  const width = Math.abs(inX - cuX)
  const height = Math.abs(inY - cuY)
  return { width, height }
}

function getStyles(coords: Coords) {
  const { cuX, cuY, inX, inY } = coords

  const left = getOffset(inX, cuX)
  const top = getOffset(inY, cuY)

  const { width, height } = getSize(coords)

  return {
    width, height, left, top,
  }
}

interface Params {
  clearIntersected: () => void
  intersected: string[]
}

export function useSelection({ intersected, clearIntersected }: Params) {
  // TODO -> hacer algo con intersected y clearIntersected
  console.log(intersected, clearIntersected)

  const [initialPoint, setInitialPoint] = useState<[number, number] | null>(null)
  const [currentPoint, setCurrentPoint] = useState<[number, number] | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)
  const areaRef = useRef<HTMLDivElement>(null)

  const selecting = initialPoint !== null && currentPoint !== null

  const coordsFromEvent = (event: React.MouseEvent) => {
    if (areaRef.current === null) throw new Error('Error: areaRef is null')

    const { top, left } = areaRef.current?.getBoundingClientRect()
    const x = event.clientX - left
    const y = event.clientY - top
    return [x, y] as [number, number]
  }

  function initSelection(event: React.MouseEvent) {
    if (menuOpen) return
    window.getSelection()?.empty()
    setInitialPoint(coordsFromEvent(event))
    setCurrentPoint(coordsFromEvent(event))
  }

  function resizeSelection(event: React.MouseEvent) {
    if (globalThis.wait || initialPoint === null || menuOpen) return

    globalThis.wait = true

    setTimeout(() => {
      globalThis.wait = false
    }, 16.66)

    setCurrentPoint(coordsFromEvent(event))
  }

  function endSelection() {
    if (!selecting) return
    // setInitialPoint(null)
    // setCurrentPoint(null)

    setMenuOpen(true)

    // clearIntersected()
  }

  let move
  let styles = {
    display: 'none',
    opacity: '1',
  }

  if (selecting) {
    const coords = getCoords(initialPoint, currentPoint)

    styles = {
      display: 'block',
      opacity: menuOpen ? '0' : styles.opacity,
      ...getStyles(coords),
    }

    move = resizeSelection
  }

  /* hacer alineamiento de la dropdown según donde esté, mediante la prop "menuClass", para que el dropdown no quede por fuera del area de selection */
  const box = <SelectionBox menuClass="dropdown-left" menuOpen={menuOpen} refobj={boxRef} styles={styles} />

  return {
    move,
    boxRef,
    selecting,
    menuOpen,
    areaRef,
    box,
    down: initSelection,
    up: endSelection,
  }
}
