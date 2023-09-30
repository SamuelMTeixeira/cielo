'use client'

import { Props } from 'react-apexcharts'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

export type ChartProps = {
  name: string
  data: number[]
  color?: string
}

type LineChart = {
  categories: (string | number)[]
  values: ChartProps[]
  loadingComponent?: ReactNode
}

export default function LineChart({
  categories,
  values,
  loadingComponent,
}: LineChart) {
  const options: Props = {
    legend: {
      show: false,
    },
    theme: {
      mode: 'light',
    },
    chart: {
      type: 'line',

      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },

    tooltip: {
      style: {
        fontSize: '12px',
        style: {
          colors: '#A3AED0',
          fontSize: '12px',
          fontWeight: '500',
        },
      },
      type: 'text',
    },

    xaxis: {
      categories,
      show: false,
      labels: {
        show: true,
        style: {
          colors: '#A3AED0',
          fontSize: '14px',
          fontWeight: '500',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },

    grid: {
      show: true,
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
  }

  const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
    loading: () => <>{loadingComponent}</>,
  })

  return (
    <Chart
      options={options}
      series={values}
      width={'100%'}
      height={'100%'}
      type="line"
    />
  )
}
