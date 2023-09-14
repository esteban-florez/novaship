import collect from '../utils/collection'

export default function getSelectOptions(options: SelectOptionsConfig | undefined) {
  if (options === undefined) return undefined

  const { type, data } = options

  if (type === 'rows') {
    const { label } = options
    return collect(data).toOptions(label)
  }

  return Object.values(data)
    .map(type => ({ label: options.translation[type], value: type }))
}
