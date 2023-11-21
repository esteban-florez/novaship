interface Props {
  _count: number
  createdAt: Date
}

export function growthComparedLastMonth<T extends Props>(arr: T[] | T[][], total: number | number[]) {
  const index = new Date().getMonth()
  const months: number[] = Array(12).fill(0)
  const result = []

  if (Array.isArray(arr[0])) {
    (arr as T[][]).forEach((subArr: T[], i) => {
      const monthsArr: number[] = Array(12).fill(0)
      subArr.forEach((item) => {
        const month = item.createdAt.getMonth()
        monthsArr[month] += item._count
      })
      const percentageByMonth = monthsArr.map((count) => (count / (Array.isArray(total) ? total[i] : total)) * 100)
      const previousIndex = index > 1 ? index - 1 : index
      const comparision = percentageByMonth[index] > percentageByMonth[previousIndex]
      const percentage = percentageByMonth[index]
      const newTotal = Array.isArray(total) ? total[i] : total
      result.push({ comparision, percentage, total: newTotal })
    })
  } else {
    (arr as T[]).forEach((item: T) => {
      const month = item.createdAt.getMonth()
      months[month] += item._count
    })
    const percentageByMonth = months.map((count) => (count / (total as number)) * 100)
    const previousIndex = index > 1 ? index - 1 : index
    const comparision = percentageByMonth[index] > percentageByMonth[previousIndex]
    const percentage = percentageByMonth[index]
    const newTotal = total as number
    result.push({ comparision, percentage, total: newTotal })
  }

  return result
}
