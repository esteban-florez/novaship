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

export function phone(phone: string) {
  return `${phone.slice(0, 4)}-${phone.slice(4)}`
}

export function ci(ci: string) {
  const result: string[] = []
  const reversed = ci.split('').reverse()

  while (reversed.length >= 3) {
    const taken = reversed.splice(0, 3)
    result.push(...taken, '.')
  }
  result.pop()

  return `V-${result.reverse().join('')}`
}
