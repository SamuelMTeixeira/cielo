'use client'

import { Props } from 'react-apexcharts'
import dynamic from 'next/dynamic'

export type ChartProps = {
  name: string
  data: number[]
  color?: string
}

type LineChart = {
  categories: string[] | number[]
  values: ChartProps[]
  width?: number
  height?: number
}

export default function LineChart({ categories, values }: LineChart) {
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
    loading: () => <p>loading chart...</p>,
  })

  return (
    <Chart
      options={options}
      series={values}
      width={500}
      height={250}
      type="line"
    />
  )
}
