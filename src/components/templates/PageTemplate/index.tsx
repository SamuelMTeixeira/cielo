import { Box } from '@/components/atoms'
import Header from '@/components/organisms/Header'
import { ComponentProps, ReactNode } from 'react'

interface PageTemplate extends ComponentProps<'main'> {
  children: ReactNode
  title: string
  rightElement?: ReactNode
}

export default function PageTemplate({
  children,
  title,
  rightElement,
  ...props
}: PageTemplate) {
  return (
    <>
      <Header title={title} rightElement={rightElement} />

      <Box as={'main'} {...props}>
        {children}
      </Box>
    </>
  )
}
