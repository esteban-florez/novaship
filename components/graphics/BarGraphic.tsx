'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface Props {
  title: string
  labels: string[]
  datasets: Array<{
    label: string
    data: number[]
    backgroundColor: string
  }>
}

export default function BarGraphic({ title, labels, datasets }: Props) {
  const options = {
    responsive: true,
    layout: {
      padding: 18,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
        color: '#a55eea',
      },
    },
  }

  const data = { labels, datasets }

  return <Bar height={40} width={100} options={options} data={data} />
}
