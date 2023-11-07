'use client'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

interface Props {
  options: ChartOptions<'radar'>
  data: ChartData<'radar'>
}

export default function RadarGraphic({ data, options }: Props) {
  return (
    <Radar
      data={data}
      options={options}
    />
  )
}
