import collect from '../utils/collection'

export default function useSelectOptions(options: SelectOptionsConfig | undefined) {
  if (options === undefined) return undefined

  const { type, data } = options

  if (type === 'rows') {
    return collect(data).toOptions()
  }

  return Object.values(data)
    .map(type => ({ label: options.translation[type], value: type }))
}
