'use client'

import {
  Chart,
  registerables,
  type ChartData,
  type ChartOptions,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

Chart.register(...registerables)

interface Props {
  title: string
  data: ChartData<'bar'>
  options?: ChartOptions<'bar'>
}

export default function BarGraphic({ title, data, options }: Props) {
  const defaultOptions = {
    ...options,
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 18,
    },
    plugins: {
      colors: {
        forceOverride: true,
      },
      legend: {
        position: 'top' as const,
      },
      labels: {
        boxWidth: 7,
        usePointStyle: true,
        pointStyle: 'circle' as const,
      },
      title: {
        text: title,
        display: true,
        color: '#a55eea',
        font: {
          size: 18,
        },
      },
      scales: {
        xAxis: {
          display: false,
        },
        yAxis: {
          max: 1,
        },
      },
      elements: {
        bar: {
          barPercentage: 0.3,
          categoryPercentage: 1,
        },
      },
    },
  }

  return (
    <Bar
      options={defaultOptions}
      data={data}
    />
  )
}
