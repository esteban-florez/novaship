import SelectionBox from '@/components/SelectionBox'
import { useRef, useState } from 'react'
import useClickOutside from './useClickOutside'

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

interface Size {
  width: number
  height: number
}

interface Position {
  top: number
  left: number
}

function getCoords(initial: [number, number], current: [number, number]): Coords {
  const [inX, inY] = initial
  const [cuX, cuY] = current

  return { inX, inY, cuX, cuY }
}

function getSize(coords: Coords): Size {
  const { cuX, cuY, inX, inY } = coords
  const width = Math.abs(inX - cuX)
  const height = Math.abs(inY - cuY)
  return { width, height }
}

function getPosition(coords: Coords): Position {
  const { cuX, cuY, inX, inY } = coords
  const left = Math.min(inX, cuX)
  const top = Math.min(inY, cuY)
  return { top, left }
}

interface Params {
  intersected: string[]
  clearIntersected: () => void
  markIntersected: (value: boolean) => void
}

export function useSelection({ intersected, clearIntersected, markIntersected }: Params) {
  const [initialPoint, setInitialPoint] = useState<[number, number] | null>(null)
  const [currentPoint, setCurrentPoint] = useState<[number, number] | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)
  const areaRef = useRef<HTMLTableSectionElement>(null)
  const menuRef = useClickOutside<HTMLUListElement>(cancelSelection)

  const selecting = initialPoint !== null && currentPoint !== null

  const coordsFromEvent = (event: React.MouseEvent) => {
    if (areaRef.current === null) throw new Error('Error: areaRef is null')

    const { top, left } = areaRef.current.getBoundingClientRect()
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
    if (intersected.length < 2) {
      cancelSelection()
      return
    }

    setMenuOpen(true)
  }

  function cancelSelection(event?: React.MouseEvent) {
    if (!selecting || (event?.type === 'mouseleave' && event?.buttons === 0)) return
    setInitialPoint(null)
    setCurrentPoint(null)
    clearIntersected()
    setMenuOpen(false)
  }

  let coords, size, position
  let move; let menuClass = 'dropdown-right'
  let styles = {
    display: 'none',
    opacity: '.75',
  }

  if (selecting) {
    coords = getCoords(initialPoint, currentPoint)
    size = getSize(coords)
    position = getPosition(coords)

    styles = {
      display: 'block',
      opacity: menuOpen ? '0' : styles.opacity,
      ...size,
      ...position,
    }

    move = resizeSelection

    if (menuRef.current !== null) {
      const { bottom, left, top, right } = menuRef.current.getBoundingClientRect()

      switch (true) {
        case top < 80:
          menuClass = 'dropdown-bottom'
          break
        case left < 250:
          menuClass = 'dropdown-right'
          break
        case window.innerWidth - right < 250:
          menuClass = 'dropdown-left'
          break
        case window.innerHeight - bottom < 80:
          menuClass = 'dropdown-top'
          break
      }
    }
  }

  const box = <SelectionBox menuClass={menuClass} menuOpen={menuOpen} refobj={boxRef} styles={styles} menuRef={menuRef} onCancel={cancelSelection} onFreeClick={() => { markIntersected(true) }} onOcuppiedClick={() => { markIntersected(false) }} />

  return {
    move,
    boxRef,
    selecting,
    areaRef,
    box,
    down: initSelection,
    up: endSelection,
    cancel: cancelSelection,
  }
}
