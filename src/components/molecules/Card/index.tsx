import { Box, Flex, Title } from '@/components/atoms'
import { ComponentProps, ReactNode } from 'react'

export type CardProps = ComponentProps<'div'> & {
  children: ReactNode
  title: string
  footer?: ReactNode
  rightElement?: ReactNode
}

export default function Card({
  children,
  className,
  footer,
  rightElement,
  title,
  ...props
}: CardProps) {
  return (
    <Box
      as={'div'}
      className={`bg-white rounded-lg p-5 shadow-md shadow-gray-200 ${className}`}
      {...props}
    >
      <Flex justify="between" items="center">
        <Title level={2}>{title}</Title>

        <Box>{rightElement}</Box>
      </Flex>

      <>{children}</>

      <Box>{footer}</Box>
    </Box>
  )
}
