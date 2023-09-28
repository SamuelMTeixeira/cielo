import Table, { ColumnsProps, RowsProps } from '@/components/atoms/Table'
import { Card } from '@/components/molecules'
import PageTemplate from '@/components/templates/PageTemplate'

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
    id: 1,
    campo1: '43d8109d',
    campo2: 'Mastercard',
    campo3: '13/07/1990',
  },
]

export default function Home() {
  return (
    <PageTemplate title="Histórico de transações">
      <Card className="mt-5" title="Todos de registros de transações">
        <Table columns={columns} rows={rows} />
      </Card>
    </PageTemplate>
  )
}
