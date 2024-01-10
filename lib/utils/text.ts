export function includesValue(strOrArr: string | string[], searchValue: string) {
  if (Array.isArray(strOrArr)) {
    return strOrArr.some(str =>
      str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .includes(searchValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase())
    )
  } else {
    return strOrArr
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .includes(searchValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase())
  }
}

export function format(value: string, type: 'ci' | 'phone') {
  if (type === 'phone') {
    return `${value.slice(0, 4)}-${value.slice(4)}`
  }

  if (type === 'ci') {
    const result: string[] = []
    const reversed = value.split('').reverse()

    while (reversed.length >= 3) {
      const taken = reversed.splice(0, 3)
      result.push(...taken, '.')
    }
    result.pop()

    return `V-${result.reverse().join('')}`
  }

  throw new Error('Type must be defined')
}
