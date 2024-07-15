'use client'

import {
  Chart,
  type ChartData,
  type ChartOptions,
  registerables,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(...registerables, ChartDataLabels)

interface Props {
  title?: string
  data: ChartData<'line'>
}

export default function LineGraphic({ title, data }: Props) {
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: true,
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
