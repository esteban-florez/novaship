'use client'

import {
  Chart,
  registerables,
  type ChartOptions,
  type ChartData,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(...registerables, ChartDataLabels)

interface Props {
  title: string
  data: ChartData<'pie'>
}

export default function PieGraphic({ title, data }: Props) {
  const options: ChartOptions<'pie'> = {
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
      tooltip: {
        callbacks: {
          label(tooltipItem) {
            const dataset = data.datasets[tooltipItem.datasetIndex]
            const currentValue = dataset.data[tooltipItem.dataIndex]
            const total = dataset.data.reduce((acc, value) => (acc += value))
            const percentage = ((currentValue * 100) / total).toFixed(0)
            return ` ${
              dataset.label ?? ''
            } (${percentage}%) - Cantidad (${currentValue})`
          },
        },
      },
      legend: {
        position: 'top' as const,
      },
      title: {
        text: title,
        display: true,
        color: '#a55eea',
        font: {
          size: 18,
        },
      },
    },
  }

  return (
    <Pie
      options={options}
      data={data}
    />
  )
}
