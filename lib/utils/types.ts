class Types <T extends object> {
  types: T

  constructor(types: T) {
    this.types = types
  }

  random() {
    return Object.values(this.types)[Math.floor(Math.random() * Object.values(this.types).length)]
  }
}

export default function types<T extends object>(types: T) {
  return new Types(types)
}
