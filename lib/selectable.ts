export default function addSelectedProp<T>(data: T[], value?: boolean): Array<T & { selected: boolean }> {
  const newData = data.map(obj => {
    return {
      ...obj,
      selected: value ?? false,
    }
  })

  return newData
}
