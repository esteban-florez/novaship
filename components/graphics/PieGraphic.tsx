'use client'

import {
  Chart as ChartJS,
  Title,
  Legend,
  ArcElement,
  type ChartOptions,
  type ChartData,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(Title, Legend, ArcElement)

interface Props {
  title: string
  data: ChartData<'pie'>
}

export default function PieGraphic({ title, data }: Props) {
  const options: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 18,
    },
    plugins: {
      tooltip: {
        callbacks: {
          label(tooltipItem) {
            const dataset = data.datasets[tooltipItem.datasetIndex]
            const currentValue = dataset.data[tooltipItem.dataIndex]
            let total = 0
            for (let i = 0; i < data.datasets.length; i++) {
              total += data.datasets[i].data[tooltipItem.dataIndex]
            }
            const percentage = ((currentValue / total) * 100).toFixed(0)
            return `Progreso (${percentage}%)`
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
