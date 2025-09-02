import collect from './collection'

class Types <T extends object> {
  types: T

  constructor(types: T) {
    this.types = types
  }

  random() {
    const values = Object.values(this.types)
    return collect(values).random().first()
  }
}

export default function types<T extends object>(types: T) {
  return new Types(types)
}
