'use client'

import {
  Chart,
  type ChartData,
  type ChartOptions,
  registerables,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

Chart.register(...registerables)

interface Props {
  title?: string
  data: ChartData<'line'>
}

export default function LineGraphic({ title, data }: Props) {
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        text: title,
        display: title != null,
        color: '#a55eea',
        font: {
          size: 18,
        },
      },
    },
  }

  return (
    <Line
      options={options}
      data={data}
    />
  )
}
