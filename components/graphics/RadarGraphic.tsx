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
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartDataLabels
)

interface Props {
  options: ChartOptions<'radar'>
  data: ChartData<'radar'>
}

export default function RadarGraphic({ data, options }: Props) {
  const defaultOptions: ChartOptions<'radar'> = {
    ...options,
    plugins: {
      datalabels: {
        display: function (ctx) {
          // @ts-expect-error Eto ta pendiente
          return ctx.dataset.data[ctx.dataIndex] > 0
        },
        color: 'white',
        backgroundColor: '#666',
        font: {
          weight: 'bolder',
        },
      },
    },
  }

  return (
    <Radar
      data={data}
      options={defaultOptions}
    />
  )
}
