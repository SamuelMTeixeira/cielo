import axiosInstance from '@/lib/axios'

interface Summary {
  totalQuantity: number
  totalAmount: number
  totalNetAmount: number
  totalAverageAmount: number
  initialDate: string
  finalDate: string
}

interface Pagination {
  pageNumber: number
  pageSize: number
  totalElements: number
  numPages: number
  lastPage: boolean
  firstPage: boolean
}

interface Item {
  id: string
  merchantId: string
  paymentNode: number
  cnpjRoot: number
  date: string
  paymentType: string
  cardBrand: string
  authorizationCode: string
  truncatedCardNumber: string
  grossAmount: number
  netAmount: number
  terminal: string
  administrationFee: number
  channelCode: number
  channel: string
  withdrawAmount: number
  minimumMDRAmmount: number
  mdrTaxAmount: number
  mdrFeeAmount: number
  status: string
}

interface TransactionsResponse {
  summary: Summary
  pagination: Pagination
  items: Item[]
}

export default async function fetchTransactions(): Promise<TransactionsResponse> {
  const response = await axiosInstance.get('/transactions')
  return response.data
}
