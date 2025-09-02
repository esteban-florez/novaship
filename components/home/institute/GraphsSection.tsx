import React from 'react'
import MiniCard from '../MiniCard'

interface Props {
  graphs: Array<{
    title: string
    count: number
    icon: React.ReactElement
  }>
  data: Array<{
    total: number
    percentage: number
    comparision: boolean
  }>
}

export default function GraphsSection({ graphs, data }: Props) {
  return (
    <section className="px-4 pt-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
      {graphs.map(({ title, count, icon }, i) => {
        return (
          <MiniCard
            key={i}
            title={title}
            count={i < 2 ? data[i].total : count}
            percentage={i < 2 ? data[i].percentage : undefined}
          >
            {i > 1 ? icon : null}
          </MiniCard>
        )
      })}
    </section>
  )
}
