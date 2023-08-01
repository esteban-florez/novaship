class Collection<T> {
  array

  constructor(array: T[]) {
    this.array = array
  }

  first() {
    return structuredClone(this.array[0])
  }

  all() {
    return structuredClone(this.array)
  }

  ids() {
    return this.array.map(element => {
      const isObject = typeof element === 'object' && element !== null

      if (!isObject) {
        throw new Error('Failed to extract ids: The elements are not objects.')
      }

      if (!('id' in element)) {
        throw new Error('Failed to extract ids: The elements are missing \'id\' property.')
      }

      return element.id
    })
  }

  random(amount = 1) {
    const arrayCopy = structuredClone(this.array)
    const result = []

    for (let i = 0; i < amount; i++) {
      const randomIndex = Math.floor(this.array.length * Math.random())
      const selected = arrayCopy.splice(randomIndex, 1)[0]
      result.push(selected)
    }

    return new Collection(result)
  }

  toOptions() {
    return this.array.map(model => {
      if (typeof model !== 'object' || model === null) {
        throw new Error(
          'Failed to convert rows into select options: rows are not objects.'
        )
      }

      if (!('id' in model)) {
        throw new Error('Failed to convert rows into select options: \'id\' field not found in row.')
      }

      const option = {
        value: model.id as string,
        label: '',
      }

      if ('name' in model && typeof model.name === 'string') {
        option.label = model.name
      } else if ('title' in model && typeof model.title === 'string') {
        option.label = model.title
      } else {
        throw new Error('Failed to convert rows into select options: \'name\' and \'title\' fields not found in row.')
      }

      return option
    })
  }
}

export default function collect<T>(array: T[]) {
  return new Collection(array)
}
