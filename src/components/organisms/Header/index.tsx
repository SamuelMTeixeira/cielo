import { Box, Flex, Title } from '@/components/atoms'
import { ReactNode } from 'react'

interface HeaderProps {
  title: string
  rightElement?: ReactNode
}

export default function Header({ title, rightElement }: HeaderProps) {
  return (
    <Box as={'header'} className="mt-1">
      <Flex justify="between" items="center">
        <Title level={1} size="2xl">
          {title}
        </Title>

        <>{rightElement}</>
      </Flex>
    </Box>
  )
}
