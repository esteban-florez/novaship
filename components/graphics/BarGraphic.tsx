'use client'

import {
  Chart,
  registerables,
  type ChartData,
  type ChartOptions,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(...registerables, ChartDataLabels)

interface Props {
  title: string
  data: ChartData<'bar'>
  options?: ChartOptions<'bar'>
}

export default function BarGraphic({ title, data, options }: Props) {
  const defaultOptions: ChartOptions<'bar'> = {
    ...options,
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 18,
    },
    // scales: {
    //   xAxis: {
    //     display: false,
    //   },
    //   yAxis: {
    //     max: 1,
    //   },
    // },

    // elements: {
    //   bar: {

    //     barPercentage: 0.3,
    //     categoryPercentage: 1,
    //   },
    // },
    plugins: {
      datalabels: {
        display: function (ctx) {
          // @ts-expect-error Eto ta pendiente
          return ctx.dataset.data[ctx.dataIndex] > 0
        },
        color: 'white',
        backgroundColor: '#666',
        // padding: 8,
        font: {
          weight: 'bolder',
        },
      },
      colors: {
        forceOverride: true,
      },
      legend: {
        position: 'top' as const,
      },
      // labels: {
      //   boxWidth: 7,
      //   usePointStyle: true,
      //   pointStyle: "circle" as const,
      // },
      title: {
        text: title,
        display: true,
        color: '#a55eea',
        font: {
          size: 18,
        },
      },
      // scales: {
      //   xAxis: {
      //     display: false,
      //   },
      //   yAxis: {
      //     max: 1,
      //   },
      // },
    },
  }

  return (
    <Bar
      options={defaultOptions}
      data={data}
    />
  )
}
