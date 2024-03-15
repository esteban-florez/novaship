import { useState } from 'react'

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

export function useSelection() {
  const [initialPoint, setInitialPoint] = useState<[number, number] | null>(null)
  const [currentPoint, setCurrentPoint] = useState<[number, number] | null>(null)
  const selecting = initialPoint !== null && currentPoint !== null

  const coordsFromEvent = (event: React.MouseEvent) =>
    [event.clientX, event.clientY] as [number, number]

  function initSelection(event: React.MouseEvent) {
    console.log('inited')
    getSelection()?.empty()
    setInitialPoint(coordsFromEvent(event))
    setCurrentPoint(coordsFromEvent(event))
  }

  function resizeSelection(event: React.MouseEvent) {
    if (globalThis.wait || initialPoint === null) return

    globalThis.wait = true

    setTimeout(() => {
      globalThis.wait = false
    }, 16.66)

    setCurrentPoint(coordsFromEvent(event))
  }

  function endSelection() {
    console.log('released')
    if (!selecting) return
    setInitialPoint(null)
    setCurrentPoint(null)
  }

  let box
  let move
  if (selecting) {
    const coords = getCoords(initialPoint, currentPoint)
    const styles = getStyles(coords)

    move = resizeSelection
    box = !selecting
      ? null
      : (
        <div
          className="border border-blue-500 bg-blue-300 opacity-75 fixed block z-50 pointer-events-none"
          style={styles}
        />
        )
  }

  return { down: initSelection, up: endSelection, move, box }
}
