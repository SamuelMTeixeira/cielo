'use client'

import ReactQueryProvider from '@/lib/react-query'

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>
}
