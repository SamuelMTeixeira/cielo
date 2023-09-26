import fetchTransactions from '@/services/transactions/fetchTransactions'
import { useQuery } from '@tanstack/react-query'

export default function useTransactions() {
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions,
  })

  return {
    transactions: data?.items,
    pagination: data?.pagination,
    summary: data?.summary,
    isFetching,
    error,
    refetch,
  }
}
