import { Box } from '@/components/atoms'
import Header from '@/components/organisms/Header'
import navigationItems from '@/data/navigationItems'
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
    <Box as={'div'} className="flex-1">
      <Header
        title={title}
        rightElement={rightElement}
        navigationItems={navigationItems}
      />

      <Box as={'main'} {...props}>
        {children}
      </Box>
    </Box>
  )
}
