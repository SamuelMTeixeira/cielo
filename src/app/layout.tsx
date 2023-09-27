import './globals.css'
import type { Metadata } from 'next'
import { Nunito, Raleway } from 'next/font/google'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Cielo Metrics',
  description: 'Histórico de transações bancárias da Cielo',
}

const raleway = Raleway({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-raleway',
})

const nunito = Nunito({
  weight: ['600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-nunito',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} ${nunito.className} min-h-full bg-gray-100`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
