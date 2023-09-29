'use client'

import { Flex, Text } from '@/components/atoms'
import { LineChart } from 'lucide-react'

const Chart = () => {
  return (
    <Flex
      items="center"
      justify="center"
      style={{ width: 500, height: 250 }}
      className="bg-gray-100 rounded-md animate-pulse"
    >
      <Flex direction="column" items="center" justify="center">
        <LineChart className="w-14 h-14 text-gray-400 " />
        <Text className="text-gray-400">carregando gráfico...</Text>
      </Flex>
    </Flex>
  )
}

const Skeleton = { Chart }

export default Skeleton
