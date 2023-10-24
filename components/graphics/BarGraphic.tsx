'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors
)

interface Props {
  title: string
  data: {
    labels: string[]
    datasets: Array<{
      label: string
      data: number[]
      // backgroundColor: string
    }>
  }
}

export default function BarGraphic({ title, data }: Props) {
  const options = {
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
      options={options}
      data={data}
    />
  )
}
