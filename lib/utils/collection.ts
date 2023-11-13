// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GroupedData = Record<string, any[]>

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
    }) as string[]
  }

  groupBy(param: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.array.reduce(function (previous: GroupedData, current: any) {
      const key = current[param]
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (previous[key]) {
        previous[key].push(current)
      } else {
        previous[key] = [current]
      }
      return previous
    }, {})
  }

  titles() {
    return this.array.map(element => {
      const isObject = typeof element === 'object' && element !== null

      if (!isObject) {
        throw new Error('Failed to extract titles: The elements are not objects.')
      }

      if (!('title' in element)) {
        throw new Error('Failed to extract titles: The elements are missing \'id\' property.')
      }

      return element.title
    }) as string[]
  }

  random(amount = 1) {
    const arrayCopy = structuredClone(this.array)
    const result = []

    for (let i = 0; i < amount; i++) {
      const randomIndex = Math.floor(arrayCopy.length * Math.random())
      const selected = arrayCopy.splice(randomIndex, 1)[0]
      result.push(selected)
    }

    return new Collection(result)
  }

  toSelectable(value = false) {
    return this.array.map(model => {
      return {
        ...model,
        selected: value,
      }
    })
  }

  deleteDuplicatesFrom(arr: T[]) {
    return this.array.filter(val => !arr.includes(val))
  }

  toOptions(labelProp?: string) {
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

      if (labelProp !== undefined) {
        const rec = model as Record<string, unknown>
        const label = rec[labelProp]

        if (typeof label !== 'string') {
          throw new Error('Failed to convert rows into select options: labelProp is not defined in row.')
        }

        option.label = label
        return option
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

export default function collect<T>(array?: T[] | null) {
  return new Collection(array ?? [])
}
