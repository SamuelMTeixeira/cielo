'use client'

import useTransactions from '@/hooks/useTransactions'
import Table, { ColumnsProps, RowsProps } from '@/components/atoms/Table'
import { Card, Section } from '@/components/molecules'
import PageTemplate from '@/components/templates/PageTemplate'
import { Box, Select } from '@/components/atoms'
import parse from '@/utils/parse'

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
    width: 100,
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
  const { transactions } = useTransactions()

  if (!transactions) {
    return <p>Carregando...</p>
  }

  const rows: RowsProps =
    transactions?.map((transaction) => ({
      id: transaction.id,
      date: parse.toDateBR(transaction.date),
      paymentType: transaction.paymentType,
      cardBrand: transaction.cardBrand,
      netAmount: transaction.netAmount,
      channel: transaction.channel,
      status: transaction.status,
    })) ?? []

  return (
    <PageTemplate
      title="Histórico de transações"
      rightElement={
        <Select
          options={['27/09/2023 a 27/10/2023']}
          defaultValue={'27/09/2023 a 27/10/2023'}
          label="Paginação"
        />
      }
    >

      <Section id="tabela" className='flex justify-center items-center'>
        <Card
          className="mt-5 w-full min-[768px]:max-w-xl min-[890px]:max-w-2xl lg:max-w-full"
          title="Transações recentes"
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
