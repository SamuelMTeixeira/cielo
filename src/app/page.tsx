'use client'

import useTransactions from '@/hooks/useTransactions'
import { Flex, Title } from '@/components/atoms'
import { Aside } from '@/components/organisms'

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
    <Flex as={'div'} gap={5} className='p-5'>
      <Aside />


      <main>
        <Title level={1}>Dashboard</Title>
      </main>

    </Flex>
  )
}
