export default function sumNetAmount(
  matchStatus: string,
  transactions: { netAmount: number; status: string }[],
): number[] {
  const sumNetAmount: number[] = []
  let sum = 0

  for (const transaction of transactions) {
    if (transaction.status.toLowerCase() === matchStatus) {
      sum += transaction.netAmount
      sumNetAmount.push(Number(sum.toFixed(2)))
    } else {
      const lastSum = sumNetAmount[sumNetAmount.length - 1]
      sumNetAmount.push(lastSum ?? 0)
    }
  }

  return sumNetAmount
}
