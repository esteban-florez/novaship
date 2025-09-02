import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline'

interface Props {
  comparision: boolean
}

export default function GrowthIcon({ comparision }: Props) {
  return comparision
    ? (
      <ArrowTrendingUpIcon className="w-12 h-12 text-success" />
      )
    : (
      <ArrowTrendingDownIcon className="w-12 h-12 text-error" />
      )
}
