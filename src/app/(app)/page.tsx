'use client'

import useTransactions from '@/hooks/useTransactions'
import PageTemplate from '@/components/templates/PageTemplate'
import LineChart from '@/components/atoms/LineChart'
import { Card, Section, Skeleton } from '@/components/molecules'
import {
  Box,
  Flex,
  Lottie,
  Select,
  Table,
  Text,
  Title,
} from '@/components/atoms'
import { ColumnsProps, RowsProps } from '@/components/atoms/Table'
import Link from '@/components/atoms/Link'
import { useState, useEffect } from 'react'
import sumNetAmount from '@/utils/sumNetAmount'
import parse from '@/utils/parse'
import generateArrayNumber from '@/utils/generateArrayNumber'
import searchAnimation from '@/assets/lottie/searchAnimation.json'

const columns: ColumnsProps[] = [
  {
    field: 'id',
    headerName: 'Id',
    headerClassName: 'table--header',
  },
  {
    field: 'date',
    headerName: 'Data',
    headerClassName: 'table--header',
    flex: 1,
    maxWidth: 100,
  },
  {
    field: 'paymentType',
    headerName: 'Tipo de pagamento',
    headerClassName: 'table--header',
    flex: 1,
    minWidth: 120,
  },
  {
    field: 'cardBrand',
    headerName: 'Bandeira',
    headerClassName: 'table--header',
    flex: 1,
    minWidth: 120,
    description:
      'Marca ou empresa responsável por um determinado cartão de crédito',
  },
  {
    field: 'netAmount',
    headerName: 'Valor líquido',
    headerClassName: 'table--header',
    flex: 1,
    minWidth: 120,
  },
  {
    field: 'channel',
    headerName: 'Canal',
    headerClassName: 'table--header',
    flex: 1,
    minWidth: 120,
    description:
      'É a forma pela qual uma transação foi realizada ou processada',
  },
  {
    field: 'status',
    headerName: 'Status',
    headerClassName: 'table--header',
    flex: 1,
    minWidth: 120,
    renderCell: (params) => {
      const status = String(params.formattedValue).toLowerCase()
      let colorSchema = ''

      switch (status) {
        case 'aprovada':
          colorSchema = 'bg-green-500'
          break
        case 'negada':
          colorSchema = 'bg-red-500'
          break
        case 'pendente':
          colorSchema = 'bg-yellow-500'
          break
        default:
          colorSchema = 'bg-gray-500'
          break
      }

      return (
        <Box
          as={'span'}
          className={`${colorSchema} font-bold text-white rounded-full py-1 px-4`}
        >
          {params.formattedValue}
        </Box>
      )
    },
  },
]

export default function Home() {
  const { transactions, summary, pagination } = useTransactions()
  const [approvedBalanceHistory, setApprovedBalanceHistory] = useState<
    number[]
  >([])
  const [deniedBalanceHistory, setDeniedBalanceHistory] = useState<number[]>([])
  const [pendingBalanceHistory, setPendingBalanceHistory] = useState<number[]>(
    [],
  )

  useEffect(() => {
    if (transactions) {
      setApprovedBalanceHistory(sumNetAmount('aprovada', transactions))
      setDeniedBalanceHistory(sumNetAmount('negada', transactions))
      setPendingBalanceHistory(sumNetAmount('pendente', transactions))
    }
  }, [transactions])

  if (!transactions && !summary && !pagination) {
    return (
      <Flex items="center" justify="center" className="h-screen w-full">
        <Flex
          as="div"
          id="loading-spinner"
          direction="column"
          items="center"
          justify="center"
          className="flex-1"
        >
          <Lottie animationData={searchAnimation} width={'80%'} />
          <Text className="text-gray-500 animate-pulse text-center" size="xl">
            Os gráficos estão sendo gerados, por favor aguarde...
          </Text>
        </Flex>
      </Flex>
    )
  }

  const totalNetAmount: string = parse.toMoney(summary?.totalNetAmount ?? 0)
  const totalAverageAmount: string = parse.toMoney(
    summary?.totalAverageAmount ?? 0,
  )

  const categories = generateArrayNumber(pagination?.pageSize ?? 0)

  const rows: RowsProps =
    transactions
      ?.filter((_, index) => index < 8)
      .map(
        ({ id, date, paymentType, cardBrand, netAmount, channel, status }) => ({
          id,
          date: parse.toDateBR(date),
          paymentType,
          cardBrand,
          netAmount: parse.toMoney(netAmount),
          channel,
          status,
        }),
      ) ?? []

  const values = [
    {
      name: 'Saldo líquido aprovado (R$)',
      data: approvedBalanceHistory,
      color: '#017ceb',
    },
    {
      name: 'Saldo líquido pendente (R$)',
      data: pendingBalanceHistory,
      color: '#eab308',
    },
    {
      name: 'Saldo líquido negado (R$)',
      data: deniedBalanceHistory,
      color: '#ef4444',
    },
  ]

  return (
    <PageTemplate
      title="Página inicial"
      className="flex-1"
      rightElement={
        <Select
          options={['27/09/2023 a 27/10/2023']}
          defaultValue={'27/09/2023 a 27/10/2023'}
          label="Paginação"
        />
      }
    >
      <Section
        id="graficos"
        className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-5"
      >
        <Card
          title={`Evolução do saldo nas ${pagination?.pageSize} últimas transações`}
        >
          <Box as={'div'} className="h-72">
            <LineChart
              values={values}
              categories={categories}
              loadingComponent={<Skeleton.Chart />}
            />
          </Box>
        </Card>

        <Card id="resumo" title="Resumo geral">
          <Flex
            as={'div'}
            direction="column"
            justify="center"
            items="center"
            className="h-full"
            gap={5}
          >
            <Box as={'div'}>
              <Text className="text-center">Saldo</Text>
              <Title
                className="text-center text-green-600"
                size="3xl"
                level={5}
              >
                {`${totalNetAmount}`}
              </Title>
            </Box>

            <Box as={'div'}>
              <Text className="text-center">Valor médio por transação</Text>
              <Title className="text-center" size="3xl" level={5}>
                {`${totalAverageAmount}`}
              </Title>
            </Box>
          </Flex>
        </Card>
      </Section>

      <Section id="tabela" className="flex justify-center items-center ">
        <Card
          id="tabela"
          className="mt-5 w-full min-[768px]:max-w-xl min-[890px]:max-w-2xl lg:max-w-full"
          title="Transações recentes"
          rightElement={
            <Link
              className="bg-gray-100 py-2 px-4"
              size="md"
              weight="medium"
              href={'/historico'}
            >
              Ver mais
            </Link>
          }
        >
          <Table
            pageSizeOptions={[8]}
            pageSize={8}
            columns={columns}
            rows={rows}
          />
        </Card>
      </Section>
    </PageTemplate>
  )
}
