'use client'

import useTransactions from '@/hooks/useTransactions'
import { Title } from '@/components/atoms'

export default function Home() {
  const { transactions, summary, pagination } = useTransactions()

  if (transactions) {
    console.log(transactions)
  }

  if (summary) {
    console.log(summary)
  }

  if (pagination) {
    console.log(pagination)
  }

  return (
    <>
      <Title level={1} size="2xl">
        Página inicial
      </Title>
    </>
  )
}
