'use client'

import useTransactions from '@/hooks/useTransactions'
import PageTemplate from '@/components/templates/PageTemplate'
import LineChart from '@/components/atoms/LineChart'
import { Card } from '@/components/molecules'
import { Box, Flex, Table, Text, Title } from '@/components/atoms'
import { ColumnsProps, RowsProps } from '@/components/atoms/Table'
import Link from '@/components/atoms/Link'

const columns: ColumnsProps[] = [
  {
    field: 'id',
    headerName: 'Id',
    headerClassName: 'table--header',
  },
  {
    field: 'campo1',
    headerName: 'campo 1',
    headerClassName: 'table--header',
    flex: 1,
    minWidth: 120,
  },
  {
    field: 'campo2',
    headerName: 'campo 2',
    headerClassName: 'table--header',
    flex: 1,
    minWidth: 120,
  },
  {
    field: 'campo3',
    headerName: 'campo 3 ',
    headerClassName: 'table--header',
    flex: 1,
    minWidth: 120,
  },
]

const rows: RowsProps = [
  {
    id: 1,
    campo1: '438109',
    campo2: 'Mastercard',
    campo3: '13/07/1990',
  },
  {
    id: 2,
    campo1: '4381e09',
    campo2: 'Elo',
    campo3: '13/07/1990',
  },
  {
    id: 3,
    campo1: '43d8109d',
    campo2: 'Mastercard',
    campo3: '13/07/1990',
  },
]

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
    <PageTemplate title="Página inicial" rightElement={<p>elemento direito</p>}>
      <Flex as={'section'} className="mt-10" gap={5} justify="between">
        <Card title="Evolução das transações">
          <LineChart
            values={[
              {
                name: 'Esse mês',
                data: [30, 40, 45],
                color: '#017ceb',
              },
              {
                name: 'Mês passado',
                data: [50, 60, 95],
                color: '#5a646e',
              },
            ]}
            categories={[2020, 2021, 2022, 2023]}
          />
        </Card>

        <Card
          className="flex flex-1 flex-col justify-between"
          title="Resumo geral"
          footer={
            <>
              <Text className="text-gray-600">
                Corresponde ao periodo do dia 27/09/2023 ao 27/10/2023
              </Text>
            </>
          }
        >
          <Flex as={'div'} justify="evenly" items="center">
            <Box as={'div'}>
              <Text className="text-center">Saldo do periodo</Text>
              <Title
                className="text-center text-green-600"
                size="3xl"
                level={5}
              >
                R$200,00
              </Title>
            </Box>

            <Box as={'div'}>
              <Text className="text-center">Total de transações</Text>
              <Title className="text-center" size="3xl" level={5}>
                03
              </Title>
            </Box>
          </Flex>
        </Card>
      </Flex>

      <Card
        className="mt-5"
        title="Histórico de registros"
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
        <Table columns={columns} rows={rows} />
      </Card>
    </PageTemplate>
  )
}
