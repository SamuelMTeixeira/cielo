'use client'

import useTransactions from '@/hooks/useTransactions'
import { Flex, Title } from '@/components/atoms'
import { Aside } from '@/components/organisms'
import { ArrowLeftRight, BadgeDollarSign, Home as HomeIcon } from 'lucide-react';

export default function Home() {

  const navItems = []

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
    <Flex as={'div'} gap={5} className="p-5">
      <Aside navigationItems={[{
        url: '/',
        name: 'Página inicial',
        Icon: HomeIcon
      },
      {
        url: '/',
        name: 'Transações',
        Icon: ArrowLeftRight
      },
      {
        url: '/',
        name: 'Transações via PIX',
        Icon: ArrowLeftRight
      },
      ]} />

      <main>
        <Title level={1}>Dashboard</Title>
      </main>
    </Flex>
  )
}
